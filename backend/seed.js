// backend/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Test = require('./models/Test'); // Make sure this path is correct

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('MongoDB connected. Seeding test data...');

    // Clear existing tests
    await Test.deleteMany();

    // Add dummy lab tests
    await Test.insertMany([
      {
        name: 'Complete Blood Count (CBC)',
        description: 'Measures various components of blood.',
        price: 300,
      },
      {
        name: 'Liver Function Test (LFT)',
        description: 'Assesses the state of the liver.',
        price: 550,
      },
      {
        name: 'Thyroid Panel',
        description: 'Tests for T3, T4, and TSH levels.',
        price: 450,
      },
    ]);

    console.log('✅ Dummy lab tests added!');
    process.exit();
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
