import { body } from 'express-validator';

export const validator = [
  body('username')
    .isString()
    .withMessage('Se require letras')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacio')
    .bail()
    .custom((username) => username === 'admin'),
];
