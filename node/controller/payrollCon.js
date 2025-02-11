import {getPayroll,getPayslip, get1Payslip,get1Payroll,addNewPayroll,deletePayroll,updatePayroll} from '../model/payrollDb.js'

const getPayrollCon = async (req,res)=>{
    res.json({payslip: await getPayroll()})
}
const getPayslipCon = async (req,res)=>{
    res.json({payslip: await getPayslip()})
}
const get1PayrollCon = async (req,res)=>{
    res.json({payslip: await get1Payroll(req.params.employeeId)})
}
const get1PayslipCon = async (req,res)=>{
    res.json({payslip: await get1Payslip(req.params.payslip_id)})
}

const addNewPayrollCon = async (req,res)=>{
    
    let {name,position, salary, hoursWorked,leaveDays,finalSalary} =req.body
    console.log(req.body);//if not data present, express.json()

    res.json({payslip: await addNewPayroll(name,position,salary,hoursWorked,leaveDays,finalSalary)})
}

const deletePayrollCon = async (req,res)=> {
    res.json({payslip: await deletePayroll(req.params.payslip_id)})
}

const updatePayrollCon = async (req, res) => {
    let {employeeId,name,hoursWorked,leaveDeductions,finalSalary} = req.body;

    res.json({Payroll: await updatePayroll(employeeId,name,hoursWorked,leaveDeductions,finalSalary,req.params.employeeId)})
}


export {getPayrollCon, getPayslipCon, get1PayslipCon,get1PayrollCon, addNewPayrollCon, deletePayrollCon, updatePayrollCon}


