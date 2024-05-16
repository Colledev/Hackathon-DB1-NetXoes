const { Router } = require('express');
const usersController = require('../controllers/usersController');
const router = Router();

router.post('/users', usersController.createUserController);

module.exports = router;
