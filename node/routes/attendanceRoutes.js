import express from 'express';
import { getAttendanceCon, postAttendanceCon, deleteAttendanceCon, patchAttendanceCon } from '../controller/attendanceController.js';

const router = express.Router();

router.get('/', getAttendanceCon);
router.post('/', postAttendanceCon);
router.patch('/:id', patchAttendanceCon);
router.delete('/:id', deleteAttendanceCon);

export default router;
