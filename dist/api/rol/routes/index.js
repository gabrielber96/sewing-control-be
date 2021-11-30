"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const sub_rol_controller_1 = require("../controllers/sub.rol.controller");
exports.router = express_1.Router();
exports.router.get('/sub', sub_rol_controller_1.findAllSubRolController);
