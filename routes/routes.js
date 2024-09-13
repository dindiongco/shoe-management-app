const express = require('express');
const shoeController = require('../controllers/shoeController');
const router = express.Router();

router.get('/collections', shoeController.getShoes);

module.exports = router;