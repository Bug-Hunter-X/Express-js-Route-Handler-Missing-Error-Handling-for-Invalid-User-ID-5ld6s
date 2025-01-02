const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling if userId is not a number
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    res.status(404).send('User not found'); // Correct status code and message
  } else {
    res.send(user);
  }
});