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
exports.findAllSubRolController = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const sequelize_1 = __importDefault(require("sequelize"));
const find_sub_rol_1 = require("../services/find.sub.rol");
const findAllSubRolController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const list = yield find_sub_rol_1.findAllSubRol();
        res.status(200).json(list);
    }
    catch (err) {
        if (err instanceof sequelize_1.default.ValidationError)
            next(http_errors_1.default(400, err));
        next(http_errors_1.default(404, err));
    }
});
exports.findAllSubRolController = findAllSubRolController;
