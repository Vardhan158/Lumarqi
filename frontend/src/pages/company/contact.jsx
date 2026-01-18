import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import lottie from 'lottie-web';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  country: '',
  jobTitle: '',
  contactAbout: '',
  contactPreference: '',
  industry: '',
  description: '',
};

const countries = ["India", "USA", "UK", "Canada", "Australia", "Other"];
const contactAboutOptions = ["General Enquiry", "Sales", "Support", "Partnership", "Other"];
const contactPreferences = ["Email", "Phone", "No Preference"];
const industries = ["Retail", "Insurance", "Banking & Financial Services", "Manufacturing", "Transportation & Logistics", "Life Sciences", "Healthcare", "Technology & Media", "Other"];

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/lottie/strategy-advisory.json', // Use your preferred animation
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!form.company.trim()) newErrors.company = 'Company name is required.';
    if (!form.country) newErrors.country = 'Country is required.';
    if (!form.jobTitle.trim()) newErrors.jobTitle = 'Job title is required.';
    if (!form.contactAbout) newErrors.contactAbout = 'Contact About is required.';
    if (!form.contactPreference) newErrors.contactPreference = 'Contact Preference is required.';
    if (!form.industry) newErrors.industry = 'Industry is required.';
    if (!form.description.trim()) newErrors.description = 'Description is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm(initialState);
      }
    } catch {
      // handle error
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50 flex flex-col items-center justify-center py-8">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 relative"
      >
        {/* Animated Logo */}
        <div className="flex flex-col items-center mb-8">
          <div ref={lottieRef} style={{ width: 100, height: 100 }} />
          <img src="/LUMAR QI.webp" alt="Lumar QI Logo" className="w-20 h-20 rounded-full shadow-lg mt-2" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">Contact Us</h2>
        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600 font-semibold py-8"
          >
            Thank you for contacting us! We'll get back to you soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
              </div>
              <div>
                <label className="block font-medium">Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
              </div>
              <div>
                <label className="block font-medium">Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
              </div>
            </div>
            <div>
              <label className="block font-medium">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
              {errors.company && <span className="text-red-500 text-xs">{errors.company}</span>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Country</label>
                <select name="country" value={form.country} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                  <option value="">Select Country</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
              </div>
              <div>
                <label className="block font-medium">Job Title</label>
                <input name="jobTitle" value={form.jobTitle} onChange={handleChange} className="w-full px-4 py-2 border rounded-md" />
                {errors.jobTitle && <span className="text-red-500 text-xs">{errors.jobTitle}</span>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Contact About</label>
                <select name="contactAbout" value={form.contactAbout} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                  <option value="">Select</option>
                  {contactAboutOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.contactAbout && <span className="text-red-500 text-xs">{errors.contactAbout}</span>}
              </div>
              <div>
                <label className="block font-medium">Contact Preference</label>
                <select name="contactPreference" value={form.contactPreference} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                  <option value="">Select</option>
                  {contactPreferences.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                {errors.contactPreference && <span className="text-red-500 text-xs">{errors.contactPreference}</span>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Industry</label>
                <select name="industry" value={form.industry} onChange={handleChange} className="w-full px-4 py-2 border rounded-md">
                  <option value="">Select Industry</option>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
                {errors.industry && <span className="text-red-500 text-xs">{errors.industry}</span>}
              </div>
              <div>
                <label className="block font-medium">Description</label>
                <textarea name="description" value={form.description} onChange={handleChange} rows={3} className="w-full px-4 py-2 border rounded-md" />
                {errors.description && <span className="text-red-500 text-xs">{errors.description}</span>}
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

