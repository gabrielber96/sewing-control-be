"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("../helpers/passport"));
const auth_routes_1 = require("../api/auth/routes/auth.routes");
const routes_1 = require("../api/rol/routes");
class Server {
    constructor(port) {
        this._app = express_1.default();
        this._httpServer = http_1.createServer(this._app);
        this._io = new socket_io_1.Server(this._httpServer);
        this._port = port;
        this.middlewares();
        this.routes();
        this.errors();
        this.socket();
    }
    routes() {
        //* AUTHENTICATE
        this._app.use('/', auth_routes_1.router);
        //* PASSPORT
        this._app.use(passport_1.default.authenticate('jwt', { session: false }));
        //* ADMIN
        this._app.use('/roles', routes_1.router);
    }
    errors() {
        this._app.use((req, res, next) => {
            const err = new Error(`Not Fount - ${req.originalUrl}`);
            res.status(404);
            next(err);
        });
        this._app.use((err, req, res, next) => {
            console.log(err.stack);
            res.status(err.status || 500).json({
                status: err.status,
                message: err.message,
                stack: err.stack,
            });
        });
    }
    middlewares() {
        this._app.use(cors_1.default({ credentials: true }));
        this._app.use(morgan_1.default('dev'));
        this._app.use(express_1.default.json({ limit: '50mb' }));
        this._app.use(express_1.default.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000,
        }));
        this._app.use(passport_1.default.initialize());
        passport_1.default.use(passport_2.default);
    }
    start(callback) {
        this._httpServer.listen(this._port, callback);
    }
    socket() {
        this._io.on('connection', (socket) => {
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
    static init(port) {
        return new Server(port);
    }
}
exports.Server = Server;
