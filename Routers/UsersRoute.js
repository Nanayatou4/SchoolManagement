const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UsersController');

router.post('/register', userController.inscription);


module.exports = router;