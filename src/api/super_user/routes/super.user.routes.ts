import { Router } from 'express';
import { signInSuperUserController } from '../controllers/super.user.controller';
import { signInSuperUserValidator } from '../middlewares';
export const router: Router = Router();

router.post('/signin', signInSuperUserValidator, signInSuperUserController);
