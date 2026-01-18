
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Contact = require('./models/Contact');
const Newsletter = require('./models/Newsletter');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Newsletter subscription endpoint
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }
  try {
    // Save email to DB, ignore duplicate
    await Newsletter.updateOne(
      { email },
      { $setOnInsert: { email } },
      { upsert: true }
    );
    return res.status(200).json({ message: 'Subscribed successfully.' });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    company,
    country,
    jobTitle,
    contactAbout,
    contactPreference,
    industry,
    description
  } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !phone || !company || !country || !jobTitle || !contactAbout || !contactPreference || !industry || !description) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const contact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      company,
      country,
      jobTitle,
      contactAbout,
      contactPreference,
      industry,
      description
    });
    await contact.save();
    return res.status(200).json({ message: 'Enquiry received and saved successfully.' });
  } catch (err) {
    console.error('Error saving contact:', err);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
