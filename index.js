// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require("helmet");

// Initialize express app
const app = express();
const port = process.env.PORT || 3000;

// Use body parser to parse JSON requests
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sonarDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// MongoDB Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Sample route to create a user (with unused parameter, which triggers SonarQube alert)
app.post('/users', async (req, res) => {
  const { name } = req.body;

  const user = new User({ name });

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: 'Error creating user' });
  }
});

// Sample route with duplicate code (SonarQube alert for code duplication)
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ error: 'Error retrieving users' });
  }
});

// Disable x-powered-by header
app.disable("x-powered-by");

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});