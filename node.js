const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); 
const escapeHtml = require('escape-html');
const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.urlencoded({ extended: true }));

db.serialize(() => {
    db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');
    db.run("INSERT INTO users (username, password) VALUES ('admin', 'password123')");
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;
    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.all(sql, [username, password],(err, rows) => {
        if (rows.length > 0) {
            res.send('Login successful!');
        } else {
            res.send('Invalid credentials!');
        }
    });
});

app.get('/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const escapedName = escapeHtml(name);
    res.send(`<h1>Welcome, ${escapedName}!</h1>`);
});

app.get('/redirect', (req, res) => {
    res.sendStatus(401);
});

app.post('/deserialize', (req, res) => {
    const parsed = req.body;
    res.send(`Deserialized data: ${JSON.stringify(parsed)}`);
});

app.get('/error', (req, res) => {
    try {
        throw new Error('Something went wrong!');
    } catch (err) {
        res.sendStatus(500);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});