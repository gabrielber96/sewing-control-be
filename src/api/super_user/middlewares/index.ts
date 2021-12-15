import { body } from 'express-validator';
import { allValidator } from '../../../helpers/express.validator';

export const signInSuperUserValidator = [
  body('username')
    .isString()
    .withMessage('Se require letras')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacio')
    .bail()
    .custom((username) => username === 'admin')
    .withMessage('El usuario no existe'),
  body('password')
    .isString()
    .withMessage('Se require letras')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacio')
    .bail()
    .custom((password) => password === 'admin')
    .withMessage('La contraseña es incorrecta'),
  allValidator,
];
