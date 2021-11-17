import { body } from 'express-validator';
import { allValidator } from '../../../helpers/express.validator';
import { existsUserByDni } from '../../user/validator/user.custom';

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
  allValidator,
];
