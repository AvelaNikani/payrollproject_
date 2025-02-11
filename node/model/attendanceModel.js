import {pool} from '../config/config.js';

// Fetch all attendance records
export const getAttendance = async () => {
    const [rows] = await pool.query('SELECT * FROM Attendance');
    return rows;
};

// Insert new attendance record
export const insertAttendance = async (employeeId, name, date, status) => {
    const [result] = await pool.query(
        'INSERT INTO Attendance (employeeId, name, date, status) VALUES (?, ?, ?, ?)',
        [employeeId, name, date, status]
    );
    return result;
};

// Delete an attendance record
export const deleteAttendance = async (id) => {
    const [result] = await pool.query('DELETE FROM Attendance WHERE id = ?', [id]);
    return result;
};

// Update attendance status
export const updateAttendance = async (id, status) => {
    const [result] = await pool.query('UPDATE Attendance SET status = ? WHERE id = ?', [status, id]);
    return result;
};
