"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = express_1.Router();
const auth_controller_1 = require("../controllers/auth.controller");
const auth_validator_1 = require("../middlewares/auth.validator");
exports.router.post('/signup', auth_validator_1.signUpValidator, auth_controller_1.signUpController);
exports.router.post('/signin', auth_validator_1.signInValidator, auth_controller_1.signInController);
