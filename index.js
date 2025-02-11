import express from 'express'
import cors from 'cors'
//importing the router that we exported
import employeesRouter from './routes/employeesRouter.js'
import payrollRouter from './routes/payrollRouter.js'
import {config} from 'dotenv'
config()

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/EmployeeInformation', employeesRouter)
app.use('/Payroll', payrollRouter)

 
    
         
 
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT)
})