import mysql from 'mysql2/promise.js';

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'mefs', 
    database: 'livraria',
    password: 'mefs'
})

console.log('Conectou Com MYSQL')
export {con} ;