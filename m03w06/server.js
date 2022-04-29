// REQUIREMENTS
const express = require('express');
const morgan = require('morgan');

const fruitsDB = {
  a1q: {
    name: 'mango',
    color: 'yellow',
    emoji: '🥭'
  },
  w4f: {
    name: 'grape',
    color: 'purple',
    emoji: '🍇'
  }
};

// SETUP AND MIDDLEWARES
const app = express();
const port = 3000;
app.use(morgan('dev')); // requests logger
app.use(express.json()); // allow requests that includes json body

// ROUTES / ENDPOINTS
app.get('/', (req, res) => {
  res.send('Hello World! 🐳');
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

  const id = Math.floor(Math.random() * 10);

  fruitsDB[id] = {
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
      .send({ message: 'Provide name, color and emoji to create a fruit' });
  }

  const { id } = req.params;

  fruitsDB[id] = {
    name,
    color,
    emoji
  };

  res.status(201).send({ message: 'Updated!', fruit: fruitsDB[id] });
});

// DELETE - DELETE
app.delete('/api/fruits/:id', (req, res) => {
  const { id } = req.params;
  delete fruitsDB[id];
  res.status(204).send();
});

// LISTENER
app.listen(port, () => console.log(`Example app listening on port ${port}`));
