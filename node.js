const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const helmet = require('helmet');

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet.hidePoweredBy());

db.serialize(() => {
    db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');
    db.run("INSERT INTO users (username, password) VALUES ('admin', 'password123')");
});

app.get('/login', (req, res) => {
    const { username, password } = req.query;

    const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
    db.all(sql, [username, password], (err, rows) => {
        if (rows.length > 0) {
            res.send('Login successful!');
        } else {
            res.send('Invalid credentials!');
        }
    });
});

app.get('/greet', (req, res) => {
    const safeName = encodeURI(req.query.name || 'Guest');
    res.send(`<h1>Welcome, ${safeName}!</h1>`);
});

app.get('/redirect', (req, res) => {
    const { url } = req.query;
    if (url.startsWith('http://localhost')) {
        res.redirect(url);
    } else {
        res.send('Invalid redirect URL');
    }
});

app.post('/deserialize', (req, res) => {
    try {
        const parsed = JSON.parse(req.body.data); 
        res.send(`Deserialized data: ${JSON.stringify(parsed)}`);
    } catch(e) {
        res.send("Incorrect data format");
    }
});

app.get('/error', (req, res) => {
    try {
        throw new Error('Something went wrong!');
    } catch (err) {
        res.status(500).send('Something went wrong!');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
