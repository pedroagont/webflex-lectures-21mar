// ----------------------- REQUIREMENTS
const express = require('express');
const morgan = require('morgan');

// Database
const fruitsDB = {
  a1q: {
    id: 'a1q',
    name: 'mango',
    color: 'yellow',
    emoji: '🥭'
  },
  w4f: {
    id: 'w4f',
    name: 'grape',
    color: 'purple',
    emoji: '🍇'
  }
};

// ----------------------- SETUP AND MIDDLEWARES
const app = express();
const port = 3000;

app.use(morgan('dev')); // middleware that logs all the requests
app.use(express.json()); // allow requests to include json body

// ----------------------- ROUTES / ENDPOINTS
app.get('/', (req, res) => {
  res.send('<h1>Hello World! 🐳</h1><p>CRUD /api/fruits</p>');
});

app.get('/home', (req, res) => {
  res.status(200).send({ message: '🏡' });
});

// CRUD Operations
// CREATE - POST
app.post('/api/fruits', (req, res) => {
  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to create a fruit' });
  }

  let id = Math.random()
    .toString(36)
    .substr(2, 3);

  fruitsDB[id] = {
    id,
    name,
    color,
    emoji
  };

  res.status(201).send({ message: 'Created!', fruit: fruitsDB[id] });
});

// READ - GET
// Read All
app.get('/api/fruits', (req, res) => {
  res.status(200).send({ message: 'List of all fruits!', fruits: fruitsDB });
});

// Read One
app.get('/api/fruits/:id', (req, res) => {
  const { id } = req.params;

  const fruit = fruitsDB[id];
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  res.status(200).send({ message: 'Here is your fruit!', fruit });
});

// UPDATE - PUT
app.put('/api/fruits/:id', (req, res) => {
  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to update a fruit' });
  }

  const { id } = req.params;

  let fruit = fruitsDB[id];
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  fruitsDB[id] = {
    id,
    name,
    color,
    emoji
  };

  res.status(201).send({ message: 'Updated!', fruit: fruitsDB[id] });
});

// DELETE - DELETE
app.delete('/api/fruits/:id', (req, res) => {
  const { id } = req.params;

  let fruit = fruitsDB[id];
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  delete fruitsDB[id];
  res.status(204).send();
});

// Catch all route
app.use((req, res) => {
  res.status(404).send({ message: 'URL Not found' });
});

// ----------------------- LISTENER
app.listen(port, () => console.log(`Example app listening on port ${port}`));
