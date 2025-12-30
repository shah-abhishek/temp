import express from 'express';
import cors from 'cors';
import os from 'os';
import open from 'open';

import db from './config/database.mjs';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        // This assumes a 'db' connection object is defined elsewhere in your project
        const [result] = await db.execute(
            `INSERT INTO users (name, email)
            VALUES(?, ?)`,
            [name, email]
        );
        res.status(201).json({ id: result.insertId, name, email });
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ error: 'Failed to insert user' });
    }
});

function getLocalIP() {
    const nets = os.networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name] || []) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return '127.0.0.1';
}

app.listen(port, '0.0.0.0', () => {
    const ip = getLocalIP();
    const url = `http://${ip}:${port}`;
    console.log(`🚀 Server running at: ${url}`);
    open(url); // optional
});
