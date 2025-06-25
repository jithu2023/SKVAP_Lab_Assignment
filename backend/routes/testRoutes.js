const express = require('express');
const router = express.Router();
const { getTests, seedTests } = require('../controllers/testController');

router.get('/', getTests);
router.get('/seed', seedTests); // optional seeding route

module.exports = router;
