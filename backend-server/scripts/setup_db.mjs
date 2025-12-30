import mysql from 'mysql2/promise';

async function init() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root@abhishek'
        });

        console.log('Connected to MySQL server.');

        await connection.query('CREATE DATABASE IF NOT EXISTS demo');
        console.log('Database "demo" created or already exists.');

        await connection.query('USE demo');

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL
            )
        `);
        console.log('Table "users" created or already exists.');

        await connection.end();
        process.exit(0);
    } catch (error) {
        console.error('Error initializing database:', error);
        process.exit(1);
    }
}

init();
