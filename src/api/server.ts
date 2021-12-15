import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server as SocketServer, Socket } from 'socket.io';
import passport from 'passport';
import passportMiddleware from '../helpers/passport';
import { router as routerAuth } from '../api/auth/routes/auth.routes';
import { router as routerRoles } from '../api/rol/routes';
import { router as routerSuperUser } from '../api/super_user/routes/super.user.routes';
import { router as routerCompany } from '../api/company/routes';

export class Server {
  private _app: Application;
  private _httpServer: any;
  private _io: any;
  private _port: number;

  constructor(port: number) {
    this._app = express();
    this._httpServer = createServer(this._app);
    this._io = new SocketServer(this._httpServer);

    this._port = port;
    this.middlewares();
    this.routes();
    this.errors();
    this.socket();
  }
  routes(): void {
    //* AUTHENTICATE
    this._app.use('/', routerAuth);
    this._app.use('/superuser', routerSuperUser);

    //* PASSPORT
    this._app.use(passport.authenticate('jwt', { session: false }));

    //* GENERAL
    this._app.use('/roles', routerRoles);
    this._app.use('/companies', routerCompany);
  }
  errors(): void {
    this._app.use((req: Request, res: Response, next: NextFunction) => {
      const err = new Error(`Not Fount - ${req.originalUrl}`);
      res.status(404);
      next(err);
    });
    this._app.use(
      (err: any, req: Request, res: Response, next: NextFunction) => {
        console.log(err.stack);
        res.status(err.status || 500).json({
          status: err.status,
          message: err.message,
          stack: err.stack,
        });
      }
    );
  }
  middlewares(): void {
    this._app.use(cors({ credentials: true }));
    this._app.use(morgan('dev'));
    this._app.use(express.json({ limit: '50mb' }));
    this._app.use(
      express.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000,
      })
    );

    this._app.use(passport.initialize());
    passport.use(passportMiddleware);
  }
  start(callback: () => void): void {
    this._httpServer.listen(this._port, callback);
  }
  socket() {
    this._io.on('connection', (socket: Socket) => {
      console.log('Se inicio!');
      socket.on('send-message', (obj) => {
        console.log(obj);
        this._io.emit('all-message', 'Te regreso a ' + obj.name);
      });
      socket.on('disconnect', () => {
        console.log('Se desconecto');
      });
    });
  }
  static init(port: number): Server {
    return new Server(port);
  }
}
