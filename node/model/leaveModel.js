import {pool} from '../config/config.js';

// Fetch all leave requests
export const getLeaveRequests = async () => {
    const [rows] = await pool.query('SELECT * FROM LeaveRequests');
    return rows;
};

// Insert a new leave request
export const insertLeaveRequest = async (employeeId, name, date, reason) => {
    const [result] = await pool.query(
        'INSERT INTO LeaveRequests (employeeId, name, date, reason, action_accept, action_deny, action_pending) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [employeeId, name, date, reason, '', '', 'Pending']
    );
    return result;
};

// Update leave request action (Accept/Deny)
export const updateLeaveStatus = async (id, action_accept, action_deny, action_pending) => {
    const [result] = await pool.query(
        'UPDATE LeaveRequests SET action_accept = ?, action_deny = ?, action_pending = ? WHERE leaveRequestId = ?',
        [action_accept, action_deny, action_pending, id]
    );
    return result;
};

// Delete a leave request
export const deleteLeaveRequest = async (id) => {
    const [result] = await pool.query('DELETE FROM LeaveRequests WHERE leaveRequestId = ?', [id]);
    return result;
};
