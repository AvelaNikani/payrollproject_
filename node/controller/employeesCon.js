import {getEmployees,get1Employee,addNewEmployee,deleteEmployee,updateEmployee} from '../model/employeesDb.js'

const getEmployeesCon = async (req,res)=>{
    res.json({employeeinformation: await getEmployees()})
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
    let {name,department,position,employmentHistory,contact} = req.body;
    
    const updatedEmployees = await getEmployees(); // Fetch updated data
    res.json(updatedEmployees);

}


export {getEmployeesCon,get1EmployeeCon,addNewEmployeeCon, deleteEmployeeCon, updateEmployeeCon}


