const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.MONGODB_URL_LOCAL;

if (!mongoURL) {
  console.error('❌ MONGODB_URL_LOCAL is missing in .env');
  process.exit(1);
}

mongoose.connect(mongoURL)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

module.exports = mongoose;
