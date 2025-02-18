import mysql from 'mysql2/promise'
import {config} from 'dotenv'
config({path:'./.env'})

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD, 
    database:process.env.DATABASE
})
console.log('DB Config:', pool);

export {pool}