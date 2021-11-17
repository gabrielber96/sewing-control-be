import { Router } from 'express';

export const router: Router = Router();
import { signUpController } from '../controllers/auth.controller';

router.post('/signup', signUpController);
