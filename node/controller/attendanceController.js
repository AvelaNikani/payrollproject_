import { getAttendance, insertAttendance, deleteAttendance, updateAttendance } from '../model/attendanceModel.js';

export const getAttendanceCon = async (req, res) => {
    res.json({ attendance: await getAttendance() });
};

export const postAttendanceCon = async (req, res) => {
    const { employeeId, name, date, status } = req.body;
    res.json({ attendance: await insertAttendance(employeeId, name, date, status) });
};

export const deleteAttendanceCon = async (req, res) => {
    const { id } = req.params;
    res.json({ attendance: await deleteAttendance(id) });
};

export const patchAttendanceCon = async (req, res) => {
    const { id, status } = req.body;
    res.json({ attendance: await updateAttendance(id, status) });
};
