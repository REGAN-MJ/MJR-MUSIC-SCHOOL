// seedAdmin.js
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  const hashedPassword = await bcrypt.hash('Beethoven0700619234', 10);

  const newAdmin = new Admin({
    username: 'ADMIN',
    password: hashedPassword
  });

  await newAdmin.save();
  console.log('✅ Admin user added');
  mongoose.disconnect();
}).catch((err) => {
  console.error('❌ Error connecting to MongoDB:', err);
});
