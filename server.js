// server.js

const express = require('express');
const app = express();
const db = require('./db');        // your Sequelize DB connection
const models = require('./models'); // your Sequelize models

const PORT = process.env.PORT || 5001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Example route: Get all user events
app.get('/api/user-events', async (req, res) => {
  try {
    const userEvents = await models.UserEvent.findAll();
    res.json(userEvents);
  } catch (error) {
    console.error('Error fetching user events:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Example route: Add a new user event
app.post('/api/user-events', async (req, res) => {
  try {
    const newEvent = await models.UserEvent.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating user event:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

// Start server after DB connection is ready
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  });
