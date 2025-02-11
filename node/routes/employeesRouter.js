import express from "express"
import {getEmployeesCon,get1EmployeeCon,addNewEmployeeCon, deleteEmployeeCon, updateEmployeeCon} from '../controller/employeesCon.js'

//manages paths from different file as I can't use app.get/app.post...can't use const app= express
const router = express.Router()



//a. that returns all the products in the database.
router.get('/', getEmployeesCon)

//b. that returns a single product based on its primary key.
router.get('/:employeeId',get1EmployeeCon )

//c. that inserts a new product within the database.
router.post('/', addNewEmployeeCon)

//d. that deletes a product based on its primary key.
router.delete('/:employeeId', deleteEmployeeCon)

//e. that updates a product based on its primary key.
router.patch('/:employeeId', updateEmployeeCon)

//allows to be used outside of the file
export default router