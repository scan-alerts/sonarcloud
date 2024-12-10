const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require("helmet");

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

// Sample route to create a user
app.post('/users', async (req, res) => {
  const { name, email } = req.body; 

  const user = new User({ name, email });

  console.log('New user created:', name); 

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({ error: 'Error creating user' });
  }
});

// Sample route with duplicate code
app.get('/users', async (req, res) => {
  const users = await User.find();
  
  res.status(200).send(users);
});

// Disable x-powered-by header
app.disable("x-powered-by");

app.listen(port, () => {
  console.log(`Server running on port ${port}`); 
});
