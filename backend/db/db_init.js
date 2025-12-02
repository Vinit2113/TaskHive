const mysql = require('mysql2/promise')

require('dotenv').config()
const poolConn = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// models loop over to create 
const tables = []


(async () => {
  try {
    
    for (const table of table) {
      const table = await poolConn.execute()
    }
  } catch (error) {
    
  }
})()