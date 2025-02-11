import express from "express"
import {getPayrollCon, getPayslipCon ,get1PayrollCon, addNewPayrollCon, deletePayrollCon, updatePayrollCon} from '../controller/payrollCon.js'

//manages paths from different file as I can't use app.get/app.post...can't use const app= express
const router = express.Router()



//a. that returns all the products in the database.
router.get('/', getPayrollCon)

router.get('/payslip', getPayslipCon)

//b. that returns a single product based on its primary key.
router.get('/:employeeId',get1PayrollCon )

//c. that inserts a new product within the database.
router.post('/', addNewPayrollCon)

//d. that deletes a product based on its primary key. 
router.delete('/:employeeId', deletePayrollCon)

//e. that updates a product based on its primary key.
router.patch('/:employeeId', updatePayrollCon)

//allows to be used outside of the file
export default router