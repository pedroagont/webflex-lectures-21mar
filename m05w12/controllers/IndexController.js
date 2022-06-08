const helloWorld = (req, res) => {
  res.send('<h1>Hello World! 🍍</h1><p>CRUD /api/fruits</p>');
};

const homepage = (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.status(200).send({ message: '🏡', views: req.session.views });
};

module.exports = { helloWorld, homepage };
