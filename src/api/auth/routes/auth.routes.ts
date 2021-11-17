import { Router } from 'express';

export const router: Router = Router();
import { signUpController } from '../controllers/auth.controller';
import { signUpValidator } from '../middlewares/auth.validator';

router.post('/signup', signUpValidator, signUpController);
router.get('/rest', (req, res) => {
  res.json('dfgdfgd');
});
