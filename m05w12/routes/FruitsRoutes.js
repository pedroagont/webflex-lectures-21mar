const express = require('express');

const { db } = require('../db');

const { FruitsController } = require('../controllers');

const router = express.Router();

// CRUD REST API FRUITS ROUTES
// CREATE - post
router.post('/', FruitsController.create);

// READ - get
// Read All
router.get('/', FruitsController.getAll);

// Read One
router.get('/:id', FruitsController.getById);

// UPDATE - put
router.put('/:id', FruitsController.update);

// DELETE - delete
router.delete('/:id', FruitsController.remove);

module.exports = router;
