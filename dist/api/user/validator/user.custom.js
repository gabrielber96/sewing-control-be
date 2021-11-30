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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInValidation = exports.existsUserByEmail = exports.existsUserByDni = void 0;
const find_user_1 = require("../services/find.user");
const bcrypt_1 = require("bcrypt");
const existsUserByDni = (dni) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield find_user_1.findOneUser({
        dni,
    });
    if (user)
        throw new Error('Ya existe el DNI ingresado');
});
exports.existsUserByDni = existsUserByDni;
const existsUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield find_user_1.findOneUser({
        email,
    });
    if (user)
        throw new Error('Ya existe el Email ingresado');
});
exports.existsUserByEmail = existsUserByEmail;
const signInValidation = (dni, { req }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.id)
        throw new Error('El usuario no existe o esta deshabilitado');
    const result = yield bcrypt_1.compare(req.body.password, req.body.origin_password);
    if (!result)
        throw new Error('La contraseña es incorrecta');
});
exports.signInValidation = signInValidation;
