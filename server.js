// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ✅ Connect to MongoDB only ONCE
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// ✅ Routes
const applicationRoutes = require('./routes/api/application');
app.use('/api/applications', applicationRoutes);

const adminRoutes = require('./routes/api/admin');
app.use('/api/admin', adminRoutes);

// ✅ Serve index.html by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
