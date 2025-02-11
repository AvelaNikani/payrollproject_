import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
//importing the router that we exported
import mysql from 'mysql2/promise';
import reviewRoutes from './routes/reviewRoutes.js';
import leaveRoutes from './routes/leaveRouter.js'
import employeesRouter from './routes/employeesRouter.js'
import payrollRouter from './routes/payrollRouter.js'
import attendanceRouter from './routes/attendanceRoutes.js'
import {config} from 'dotenv'
config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json());

app.use(express.json());



app.use(cors());
app.use(express.json())
app.use('/EmployeeInformation', employeesRouter)
app.use('/Payroll', payrollRouter)
app.use('/Review', reviewRoutes)
app.use('/Leave', leaveRoutes)  
app.use('/Attendance', attendanceRouter)

 
    
         
 
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT)
})