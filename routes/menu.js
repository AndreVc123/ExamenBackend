const express = require('express');
const { opciones } = require('../controllers/menu');
const router = express.Router();

router.get('/opciones', opciones);

module.exports = router;