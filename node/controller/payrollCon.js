import {getPayroll,getPayslip,get1Payroll,addNewPayroll,deletePayroll,updatePayroll} from '../model/payrollDb.js'

const getPayrollCon = async (req,res)=>{
    res.json({Payroll: await getPayroll()})
}
const getPayslipCon = async (req,res)=>{
    res.json({payslip: await getPayslip()})
}
const get1PayrollCon = async (req,res)=>{
    res.json({Payroll: await get1Payroll(req.params.employeeId)})
}

const addNewPayrollCon = async (req,res)=>{
    
    let {employeeId,name,hoursWorked,leaveDeductions,finalSalary} =req.body
    console.log(req.body);//if not data present, express.json()

    res.json({Payroll: await addNewPayroll(employeeId,name,hoursWorked,leaveDeductions,finalSalary)})
}

const deletePayrollCon = async (req,res)=> {
    res.json({Payroll: await deletePayroll(req.params.product_code)})
}

const updatePayrollCon = async (req, res) => {
    let {employeeId,name,hoursWorked,leaveDeductions,finalSalary} = req.body;

    res.json({Payroll: await updatePayroll(employeeId,name,hoursWorked,leaveDeductions,finalSalary,req.params.employeeId)})
}


export {getPayrollCon, getPayslipCon,get1PayrollCon, addNewPayrollCon, deletePayrollCon, updatePayrollCon}


