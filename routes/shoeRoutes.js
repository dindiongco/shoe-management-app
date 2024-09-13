const express = require('express');
const shoeController = require('../controllers/shoeController');
const router = express.Router();

router.get('/', shoeController.getShoes);

module.exports = router;