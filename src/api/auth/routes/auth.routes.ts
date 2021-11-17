import { Router } from 'express';

export const router: Router = Router();
import { signInController, signUpController } from '../controllers/auth.controller';
import { signInValidator, signUpValidator } from '../middlewares/auth.validator';

router.post('/signup', signUpValidator, signUpController);
router.post('/signin', signInValidator, signInController);
