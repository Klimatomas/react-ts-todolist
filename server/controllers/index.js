const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

router.use('/', require('./todos'))

module.exports = router;