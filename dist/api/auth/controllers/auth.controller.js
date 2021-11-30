"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInController = exports.signUpController = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const jsonwebtoken_1 = require("jsonwebtoken");
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = require("../../../config");
const auth_service_1 = require("../services/auth.service");
const signUpController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield auth_service_1.signUpService({
            dni: req.body.dni,
            cellphone: req.body.cellphone,
            email: req.body.email,
            name: req.body.name,
            lastname: req.body.lastname,
            password: req.body.password,
            sexo: req.body.sexo,
            date: req.body.date,
            image: req.body.image,
        });
        res.status(200).json('¡usuario creado!');
    }
    catch (err) {
        if (err instanceof sequelize_1.default.ValidationError)
            next(http_errors_1.default(400, err));
        next(http_errors_1.default(404, err));
    }
});
exports.signUpController = signUpController;
const signInController = (req, res, next) => {
    try {
        const jwt = jsonwebtoken_1.sign({ _id: req.body.id }, config_1.config.SECRET_HIDDEN_KEY);
        res.status(200).json({
            name: req.body.name,
            lastname: req.body.lastname,
            date: req.body.date,
            sexo: req.body.sexo,
            path: req.body.path,
            rol_id: req.body.rol_id,
            sub_rol_id: req.body.sub_rol_id,
            jwt,
        });
    }
    catch (err) {
        if (err instanceof sequelize_1.default.ValidationError)
            next(http_errors_1.default(400, err));
        next(http_errors_1.default(404, err));
    }
};
exports.signInController = signInController;
