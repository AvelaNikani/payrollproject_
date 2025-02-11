import {pool} from '../config/config.js'

//functions for products
const getPayroll = async ()=> {
    let [data] = await pool.query('SELECT * FROM Payroll')
    return data
}
const getPayslip = async ()=> {
    let [data] = await pool.query('SELECT * FROM payslip')
    return data
}

const get1Payroll = async (employeeId)=> {
    let [data] = await pool.query('SELECT * FROM Payroll WHERE employeeId = ?',[employeeId])
    return data
}
const get1Payslip = async (payslip_id)=> {
    let [data] = await pool.query('SELECT * FROM payslip WHERE payslip_id = ?',[payslip_id])
    return data
}

const addNewPayroll = async (name, position, salary, hoursWorked, leaveDeductions, finalSalary) => {
    await pool.query('INSERT INTO `moderntech_db`.`payslip` (`name`,`position`,`salary`,`hoursWorked`,`leaveDeductions`,`finalSalary`) VALUES(?,?,?,?,?,?)', [name,position,salary,hoursWorked,leaveDeductions,finalSalary])

    return await getPayroll()//allows us to see updated 
}

const deletePayroll = async (payslip_id) => {
    await pool.query('DELETE FROM payslip WHERE payslip_id = ?',[payslip_id])
    
    return await getPayroll()//allows us to see updated 
}

const updatePayroll = async (columnName, value, payslip_id) => {
    console.log(columnName, value, payslip_id);
    await pool.query(`UPDATE payslip SET ${columnName} = ? WHERE employeeId= ?`,[value,payslip_id])
    
    return await getEmployees()
}
export{getPayroll,getPayslip,get1Payroll,get1Payslip,addNewPayroll,deletePayroll,updatePayroll}