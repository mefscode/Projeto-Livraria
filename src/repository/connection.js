import mysql from 'mysql2/promise.js';

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    database: 'livraria',
    password: 'root'
})

console.log('Conectou Com MYSQL')
export {con} ;