"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInValidator = exports.signUpValidator = void 0;
const express_validator_1 = require("express-validator");
const express_validator_2 = require("../../../helpers/express.validator");
const user_custom_1 = require("../../user/validator/user.custom");
const user_sanitizer_1 = require("../../user/validator/user.sanitizer");
exports.signUpValidator = [
    express_validator_1.body('dni')
        .isNumeric()
        .withMessage('Se require un valor numerico')
        .bail()
        .isLength({
        min: 8,
        max: 8,
    })
        .withMessage('Solo se permiten 8 digitos')
        .bail()
        .custom(user_custom_1.existsUserByDni),
    express_validator_1.body('cellphone')
        .isNumeric()
        .withMessage('Se require digitos numericos')
        .bail()
        .isLength({ min: 9, max: 9 })
        .withMessage('Se requiren solo 9 numeros'),
    express_validator_1.body('email').isEmail().withMessage('Se require un formato de Email').bail().custom(user_custom_1.existsUserByEmail),
    express_validator_1.body('name')
        .isString()
        .withMessage('Se require un nombre')
        .bail()
        .not()
        .isEmpty()
        .withMessage('No puede ser vacío')
        .bail()
        .isLength({ min: 3, max: 100 })
        .withMessage('El minimo es 3 y maximo 100 letras'),
    express_validator_1.body('lastname')
        .isString()
        .withMessage('Se require un nombre')
        .bail()
        .not()
        .isEmpty()
        .withMessage('No puede ser vacío')
        .bail()
        .isLength({ min: 3, max: 100 })
        .withMessage('El minimo es 3 y maximo 100 letras'),
    express_validator_1.body('sexo').toLowerCase().isIn(['masculino', 'femenino']).withMessage('Solo se permite Masculino y Femenino'),
    express_validator_1.body('date').isISO8601().withMessage('Se require una fecha valida'),
    express_validator_2.allValidator,
];
exports.signInValidator = [express_validator_1.body('dni').customSanitizer(user_sanitizer_1.signInSanitizer).custom(user_custom_1.signInValidation), express_validator_2.allValidator];
