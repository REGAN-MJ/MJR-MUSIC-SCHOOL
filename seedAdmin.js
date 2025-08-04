require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const MONGO_URI = process.env.MONGO_URI || 'your-mongo-uri-here';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const username = 'admin'; // change as needed
    const password = 'Beethoven0700619234'; // change as needed
    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.deleteMany({ username }); // Remove existing user with same username
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    console.log('Admin user created!');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error(err);
    mongoose.disconnect();
  });