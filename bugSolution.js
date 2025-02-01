const express = require('express');
const app = express();

// Set the limit for JSON body size
app.use(express.json({ limit: '50mb' })); // Adjust limit as needed

app.post('/users', (req, res) => {
  const user = req.body;
  // ... process user data ...
  res.status(201).send(user);
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});