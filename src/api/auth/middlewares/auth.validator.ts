import { body } from 'express-validator';
import { allValidator } from '../../../helpers/express.validator';
import { existsUserByDni, existsUserByEmail, signInValidation } from '../../user/validator/user.custom';
import { signInSanitizer } from '../../user/validator/user.sanitizer';

export const signUpValidator = [
  body('dni')
    .isNumeric()
    .withMessage('Se require un valor numerico')
    .bail()
    .isLength({
      min: 8,
      max: 8,
    })
    .withMessage('Solo se permiten 8 digitos')
    .bail()
    .custom(existsUserByDni),
  body('cellphone')
    .isNumeric()
    .withMessage('Se require digitos numericos')
    .bail()
    .isLength({ min: 9, max: 9 })
    .withMessage('Se requiren solo 9 numeros'),
  body('email').isEmail().withMessage('Se require un formato de Email').bail().custom(existsUserByEmail),
  body('name')
    .isString()
    .withMessage('Se require un nombre')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacío')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('El minimo es 3 y maximo 100 letras'),
  body('lastname')
    .isString()
    .withMessage('Se require un nombre')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacío')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('El minimo es 3 y maximo 100 letras'),
  body('sexo').toLowerCase().isIn(['masculino', 'femenino']).withMessage('Solo se permite Masculino y Femenino'),
  body('date').isISO8601().withMessage('Se require una fecha valida'),
  allValidator,
];
export const signInValidator = [body('dni').customSanitizer(signInSanitizer).custom(signInValidation)];
