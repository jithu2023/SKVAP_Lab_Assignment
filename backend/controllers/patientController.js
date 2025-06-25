const Patient = require('../models/Patient');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let patient = await Patient.findOne({ email });
    if (patient) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    patient = await Patient.create({ name, email, password: hashedPassword });
    const token = generateToken(patient._id);
    res.json({ token, patient: { id: patient._id, name: patient.name, email: patient.email } });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const patient = await Patient.findOne({ email });
    if (!patient) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken(patient._id);
    res.json({ token, patient: { id: patient._id, name: patient.name, email: patient.email } });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
};
