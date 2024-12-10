const express = require('express');
const router = express.Router();
let dbConnection = null;
router.get('/connect', (req, res) => {
    dbConnection = { connected: true, retries: 0 }; 
    res.send('Database connected');
});

router.get('/query', (req, res) => {
    const data = [];
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 500; j++) {
            data.push(i + j);
        }
    }
    res.send(data);
});

router.get('/static-data', (req, res) => {
    res.json({
        username: 'test_user',
        password: 'test_password',
    });
});

router.get('/long-operation', (req, res) => {
    const start = Date.now();
    while (Date.now() - start < 5000) {}
    res.send('Operation complete');
});

module.exports = router;
