import { Router } from 'express';
import getAll from './get_all';
import post from './post';

const router = Router();

router.get('/', getAll);
router.post('/', post);

export default router;
