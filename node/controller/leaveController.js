import { getLeaveRequests, insertLeaveRequest, updateLeaveStatus, deleteLeaveRequest } from '../model/leaveModel.js';

export const getLeaveCon = async (req, res) => {
    res.json({ leaveRequests: await getLeaveRequests() });
};

export const postLeaveCon = async (req, res) => {
    const { employeeId, name, date, reason } = req.body;
    res.json({ leaveRequests: await insertLeaveRequest(employeeId, name, date, reason) });
};

export const patchLeaveCon = async (req, res) => {
    const { id, action_accept, action_deny, action_pending } = req.body;
    res.json({ leaveRequests: await updateLeaveStatus(id, action_accept, action_deny, action_pending) });
};

export const deleteLeaveCon = async (req, res) => {
    const { id } = req.params;
    res.json({ leaveRequests: await deleteLeaveRequest(id) });
};
