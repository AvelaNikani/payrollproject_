import {pool} from '../config/config.js';

//functions for employees
const getEmployees = async ()=> {
    let [data] = await pool.query('SELECT * FROM EmployeeInformation;')
    return data
    console.log(data)
}
const get1Employee = async (employeeId)=> {
    let [data] = await pool.query('SELECT * FROM EmployeeInformation WHERE employeeId = ?',[employeeId])
    return data
}

const addNewEmployee= async (name,position,department,salary,contact,employmentHistory) => {
    await pool.query('INSERT INTO `moderntech_db`.`EmployeeInformation` (`name`,`position`,`department`,`salary`,`contact`,`employmentHistory`) VALUES(?,?,?,?,?,?)', [name,position,department,salary,contact,employmentHistory])

    return await getEmployees()//allows us to see updated 
}

const deleteEmployee = async (employeeId) => {
    await pool.query('DELETE FROM EmployeeInformation WHERE employeeId =?',[employeeId])
    
    return await getEmployees()//allows us to see updated 
}

const updateEmployee= async (name,position,department,salary,employmentHistory,contact, employeeId) => {
    await pool.query('UPDATE `EmployeeInformation` SET `name`= ?,`position`= ?,`department`= ?,`salary`= ?,`employmentHistory`= ?,`contact`= ? WHERE `employeeId`= ?',[name,position,department,salary,employmentHistory,contact,employeeId])
    
    return await getEmployees()//allows us to see updated 
}


export{getEmployees,get1Employee,addNewEmployee,deleteEmployee,updateEmployee} 