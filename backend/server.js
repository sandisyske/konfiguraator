const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// User Registration
app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await pool.query(
            'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)',
            [username, email, hashedPassword]
        );
        res.json({ message: 'User registered' });
    } catch (err) {
        console.error('Error during registration:', err);
        if (err.code === '23505') {
            // Unique constraint violation if email or username already exists
            return res.status(400).json({ error: 'Email already registered' });
        }
        res.status(500).json({ error: 'Registration failed' });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (!user.rows.length) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password_hash);
    if (!validPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.rows[0].id }, 'secretkey', { expiresIn: '1h' });
    res.json({ token });
});

// Protected Route (Example)
app.get('/api/dashboard', (req, res) => {
    res.json({ message: 'Welcome to your dashboard!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
