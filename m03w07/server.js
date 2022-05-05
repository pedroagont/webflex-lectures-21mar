// ----------------------- REQUIREMENTS
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');

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

const usersDB = [
  {
    id: 'ar5',
    email: 'user1@email.com',
    password: '123'
  }
];

// ----------------------- SETUP AND MIDDLEWARES
const app = express();
const port = 3000;

app.use(helmet()); // includes security headers (owasp)
app.use(morgan('dev')); // middleware that logs all the requests
app.use(express.json()); // allow requests to include json body
app.use(
  cookieSession({
    name: 'session',
    keys: ['myRandomSuperSecretKey', 'anotherRandomString'],

    // Cookie Options
    // maxAge: 24 * 60 * 60 * 1000 // 24 hours
    maxAge: 10 * 60 * 1000 // 10 min
  })
);

// ----------------------- ROUTES / ENDPOINTS
app.get('/', (req, res) => {
  res.send('<h1>Hello World! 🐳</h1><p>CRUD /api/fruits</p>');
});

app.get('/home', (req, res) => {
  // Update views
  req.session.views = (req.session.views || 0) + 1;
  res.status(200).send({ message: '🏡', views: req.session.views });
});

// CRUD REST API FRUITS ROUTES
// CREATE - post
app.post('/api/fruits', (req, res) => {
  const { userId } = req.session;
  if (!userId) {
    return res.status(401).send({ message: 'User is not logged in' });
  }

  const validUser = usersDB.find(usr => usr.id === userId);
  if (!validUser) {
    return res.status(403).send({ message: 'Invalid user' });
  }

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

// READ - get
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

// UPDATE - put
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

// DELETE - delete
app.delete('/api/fruits/:id', (req, res) => {
  const { id } = req.params;

  let fruit = fruitsDB[id];
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  delete fruitsDB[id];
  res.status(204).send();
});

// AUTHENTICATION ROUTES
app.post('/api/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ message: 'Provide email and password to register' });
  }

  const emailExists = usersDB.find(usr => usr.email === email);
  if (emailExists) {
    return res
      .status(400)
      .send({ message: 'An user already exists with that email' });
  }

  let id = Math.random()
    .toString(36)
    .substr(2, 3);
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = {
    id,
    email,
    password: hashedPassword
  };

  usersDB.push(newUser);
  console.log(usersDB);

  res
    .status(201)
    .send({ message: 'User registered successfully!', user: newUser });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: 'Provide email and password' });
  }

  const user = usersDB.find(usr => usr.email === email);
  if (!user) {
    return res.status(401).send({ message: 'Invalid credentials!' });
  }

  const passwordsMatch = bcrypt.compareSync(password, user.password);
  if (!passwordsMatch) {
    return res.status(401).send({ message: 'Invalid credentials!' });
  }

  req.session.userId = user.id;

  res.status(200).send({ message: 'User logged in successfully!' });
});

app.post('/api/auth/logout', (req, res) => {
  req.session = null;
  res.status(200).send({ message: 'User successfully logged out' });
});

// Catch all route
app.use((req, res) => {
  res.status(404).send({ message: 'URL Not found' });
});

// ----------------------- LISTENER
app.listen(port, () => console.log(`Example app listening on port ${port}`));
