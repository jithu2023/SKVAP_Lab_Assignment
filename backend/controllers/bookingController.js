const Booking = require('../models/Booking');

exports.bookTest = async (req, res) => {
  const { testId } = req.body;
  try {
    const booking = await Booking.create({ patient: req.patient._id, test: testId });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Booking failed' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ patient: req.patient._id }).populate('test');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch bookings' });
  }
};

exports.getReport = async (req, res) => {
  const { bookingId } = req.params;
  try {
    const filePath = `${__dirname}/../reports/dummy_report.pdf`;
    res.download(filePath, 'report.pdf');
  } catch (err) {
    res.status(500).json({ message: 'Could not download report' });
  }
};
