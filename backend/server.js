const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Contact = require('./models/Contact');

const Newsletter = require('./models/Newsletter');

const DemoRequest = require('./models/DemoRequest');
const transporter = require('./mailer');

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

// Request Demo endpoint
app.post('/api/request-demo', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  try {
    await DemoRequest.create({ name, email, message });

    // Email HTML with logo and more dynamic animated banner
    const logoUrl = 'https://lumarqi.onrender.com/lumarqi.jpg';
    // Use a vibrant animated gradient with moving stripes for the banner
    const bannerStyle = `
      background: linear-gradient(270deg, #6366f1, #a5b4fc, #06b6d4, #6366f1);
      background-size: 800% 800%;
      color: #fff;
      padding: 36px 0 36px 0;
      text-align: center;
      font-size: 2.2rem;
      font-family: Arial, sans-serif;
      font-weight: bold;
      letter-spacing: 0.07em;
      position: relative;
      overflow: hidden;
      animation: bannerGradientMove 4s ease-in-out infinite;
      border-bottom: 4px solid #6366f1;
      box-shadow: 0 4px 24px 0 #a5b4fc33;
      text-shadow: 0 2px 8px #6366f1cc;
    `;
    // Add keyframes for the animation (inline for email compatibility)
    const keyframes = `
      <style>
        @keyframes bannerGradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      </style>
    `;
    const html = `
      ${keyframes}
      <div style="max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;font-family:Arial,sans-serif;background:#fff;">
        <div style="padding:32px 0 16px 0;text-align:center;">
          <img src="${logoUrl}" alt="Lumar QI Logo" width="180" height="180" style="display:block;margin:auto;background:#fff;border-radius:16px;" />
        </div>
        <div style='${bannerStyle}'>
          <span>🚀 New Demo Request Received 🚀</span>
        </div>
        <div style="padding:32px 24px 24px 24px;background:#f9fafb;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message || ''}</p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Demo Request Received',
      html,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending demo request email:', error);
      } else {
        console.log('Demo request email sent:', info.response);
      }
    });

    return res.status(200).json({ message: 'Demo request received.' });
  } catch (err) {
    console.error('Demo request error:', err);
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
