import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
}).promise();

const [rows] = await pool.query('SELECT * FROM Users;');
console.log(rows);

export { pool };
