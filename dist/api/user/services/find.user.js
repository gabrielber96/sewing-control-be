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
exports.findOneUser = void 0;
const database_1 = require("../../../database");
const findOneUser = (where, attributes) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield database_1.DataBase.instance.User.findOne({
            attributes,
            where,
        });
        if (user)
            return user.get({ plain: true });
        return user;
    }
    catch (err) {
        throw err;
    }
});
exports.findOneUser = findOneUser;
