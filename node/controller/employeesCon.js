import {getEmployees,get1Employee,addNewEmployee,deleteEmployee,updateEmployee} from '../model/employeesDb.js' ;

const getEmployeesCon = async (req,res)=>{
    res.json({employeeinformation: await getEmployees()})
    console.log(employeeinformation)
}
const get1EmployeeCon = async (req,res)=>{
    res.json({employeeinformation: await get1Employee(req.params.employeeId)})
}

const addNewEmployeeCon = async (req,res)=>{
    
    let {name,position,department,salary,employmentHistory,contact} = req.body
    console.log(req.body);//if not data present, express.json()

    res.json({employeeinformation: await addNewEmployee(name,position,department,salary,contact,employmentHistory)})
}

const deleteEmployeeCon = async (req,res)=> {
    res.json({employeeinformation: await deleteEmployee(req.params.employeeId)})
} 

const updateEmployeeCon = async (req, res) => {
    let {employeeId} = req.params;
    // let {name,department,position,employmentHistory,contact} = req.body;
    let value
    for (const key in req.body) {
        value = req.body[`${key}`]
        
    }
    console.log(value);
    await updateEmployee(Object.keys(req.body)[0], value, employeeId)
    const updatedEmployees = await getEmployees(); // Fetch updated data
    res.json(updatedEmployees);
}


export {getEmployeesCon,get1EmployeeCon,addNewEmployeeCon, deleteEmployeeCon, updateEmployeeCon}


