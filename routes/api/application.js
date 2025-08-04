const express = require('express');
const router = express.Router();
const Application = require('../../models/Application');

// GET all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new application
router.post('/', async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit application', details: err.message });
  }
});

module.exports = router; // ✅ Export at the end
