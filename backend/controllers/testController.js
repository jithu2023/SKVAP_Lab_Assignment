const Test = require('../models/Test');

exports.getTests = async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tests' });
  }
};

// Add dummy tests if DB is empty
exports.seedTests = async (req, res) => {
  const tests = [
    { name: 'Complete Blood Count', description: 'Blood test to evaluate overall health.', price: 500 },
    { name: 'Liver Function Test', description: 'Check liver health.', price: 800 },
    { name: 'Thyroid Panel', description: 'Check thyroid hormone levels.', price: 700 },
  ];
  try {
    const existing = await Test.find();
    if (existing.length === 0) {
      await Test.insertMany(tests);
    }
    res.json({ message: 'Test data seeded (if empty)' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to seed tests' });
  }
};
