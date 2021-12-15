import { body } from 'express-validator';
import { allValidator } from '../../../helpers/express.validator';
export const createCompanyValidator = [
  body('business_name')
    .isString()
    .withMessage('Se require un nombre de la empresa')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacío')
    .bail()
    .isLength({ max: 100 })
    .withMessage('100 caracteres como maximo'),
  body('ruc')
    .isInt()
    .withMessage('Se require un numero de ruc')
    .bail()
    .isLength({ min: 8, max: 11 })
    .withMessage('Un minimo de 8 digitos y un maximo de 11 digitos'),
  body('direction')
    .isString()
    .withMessage('Se require una dirección')
    .bail()
    .not()
    .isEmpty()
    .withMessage('No puede ser vacío')
    .bail()
    .isLength({ max: 255 })
    .withMessage('100 caracteres como maximo'),
  allValidator,
];
