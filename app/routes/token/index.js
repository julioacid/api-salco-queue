import { Router } from 'express';
import get from './get';

const router = Router();

router.get('/', get);

export default router;
