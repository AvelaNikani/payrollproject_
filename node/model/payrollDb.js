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

const addNewPayroll = async (employeeId,name,hoursWorked,leaveDeductions,finalSalary) => {
    await pool.query('INSERT INTO `moderntech_db`.`Payroll` (`employeeId`,`name`,`hoursWorked`,`leaveDeductions`,`finalSalary`) VALUES(?,?,?,?,?)', [employeeId,name,hoursWorked,leaveDeductions,finalSalary])

    return await getPayroll()//allows us to see updated 
}

const deletePayroll = async (employeeId) => {
    await pool.query('DELETE FROM Payroll WHERE employeeId = ?',[employeeId])
    
    return await getPayroll()//allows us to see updated 
}

const updatePayroll= async (employeeId,name,hoursWorked,leaveDeductions,finalSalary) => {
    await pool.query('UPDATE `Payroll` SET `employeeId`= ?,`name`= ?,`hoursWorked`= ?,`leaveDeductions`= ?,`finalSalary`= ? WHERE `employeeId`=?',[employeeId,name,hoursWorked,leaveDeductions,finalSalary])
    
    return await getPayroll()//allows us to see updated 
}

export{getPayroll,getPayslip,get1Payroll,addNewPayroll,deletePayroll,updatePayroll}