const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');

const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.patient = await Patient.findById(decoded.id).select('-password');
      next();
    } else {
      res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (err) {
    res.status(401).json({ message: "Token failed" });
  }
};

module.exports = { protect };
