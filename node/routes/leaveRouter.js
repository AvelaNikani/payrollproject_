import express from 'express';
import { getLeaveCon, postLeaveCon, patchLeaveCon, deleteLeaveCon } from '../controller/leaveController.js';

const router = express.Router();

router.get('/', getLeaveCon);
router.post('/', postLeaveCon);
router.patch('/:id', patchLeaveCon);
router.delete('/:id', deleteLeaveCon);

export default router;
