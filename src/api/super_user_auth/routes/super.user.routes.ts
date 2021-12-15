import { Router } from 'express';
import { signInSuperUserController } from '../controllers/super.user.controller';
export const router: Router = Router();

router.post('/', signInSuperUserController);
