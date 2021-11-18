import { Router } from 'express';
import { findAllSubRolController } from '../controllers/sub.rol.controller';

export const router: Router = Router();

router.get('/sub', findAllSubRolController);
