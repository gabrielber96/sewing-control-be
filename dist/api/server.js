"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("../helpers/passport"));
class Server {
    constructor(port) {
        this._app = express_1.default();
        this._httpServer = http_1.createServer(this._app);
        this._io = new socket_io_1.Server(this._httpServer);
        this._router = express_1.Router();
        this._port = port;
        this.middlewares();
        this.routes();
        this.errors();
        this.socket();
    }
    routes() { }
    errors() {
        this._router.use((req, res, next) => {
            const err = new Error(`Not Fount - ${req.originalUrl}`);
            res.status(404);
            next(err);
        });
        this._router.use((err, req, res, next) => {
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
        this._router.use(passport_1.default.initialize());
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
