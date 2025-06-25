const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { bookTest, getBookings, getReport } = require('../controllers/bookingController');

router.post('/', protect, bookTest);
router.get('/', protect, getBookings);
router.get('/report/:bookingId', protect, getReport);

module.exports = router;
