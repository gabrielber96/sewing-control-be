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
exports.signInSanitizer = void 0;
const sequelize_1 = require("sequelize");
const find_user_1 = require("../services/find.user");
const signInSanitizer = (dni, { req }) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield find_user_1.findOneUser({
        [sequelize_1.Op.and]: {
            dni,
            state: 1,
        },
    });
    if (!user)
        return dni;
    req.body.id = user.id;
    req.body.name = user.name;
    req.body.lastname = user.lastname;
    req.body.path = user.path;
    req.body.origin_password = user.password;
    req.body.sexo = user.sexo;
    req.body.date = user.date;
    req.body.rol_id = user.rol_id;
    req.body.sub_rol_id = user.sub_rol_id;
    return dni;
});
exports.signInSanitizer = signInSanitizer;
