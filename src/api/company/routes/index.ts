import { Router } from 'express';

export const router: Router = Router();
import {
  createCompanyController,
  listCompanyController,
} from '../controllers/company.controller';
import { createCompanyValidator } from '../middlewares';

router.post('/', createCompanyValidator, createCompanyController);
router.get('/', listCompanyController);
