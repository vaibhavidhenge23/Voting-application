require('dotenv').config();   // ✅ FIRST
require('./db');              // ✅ SECOND (MongoDB connection)

const express = require('express');
const app = express();

// built-in body parser (no need of body-parser)
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

// API base routes
app.use('/api/users', userRoutes);
app.use('/api/candidates', candidateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
