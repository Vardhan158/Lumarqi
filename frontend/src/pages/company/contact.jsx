import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

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
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        alert('Enquiry submitted successfully!');
        setForm(initialState);
        setErrors({});
      } else {
        alert(data.error || 'Submission failed.');
      }
    } catch (err) {
      alert('Server error. Please try again later.');
    }
  };

  return (
    <main className="pt-28 md:pt-40 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-[#f7f5f0]">
      <Navbar />
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-semibold mb-2">Make an enquiry</h1>
        <div className="border-b w-1/4 border-blue-600 mb-4" />
        <p className="text-slate-600 mb-6">We approach every relationship with a unique and invigorating perspective. Let us know your enquiry and our team will be in touch soon.</p>
        <form className="bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit} noValidate>
          <h2 className="text-2xl font-semibold mb-4 text-center">Contact us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-medium">First name<span className="text-red-500">*</span></label>
              <input name="firstName" value={form.firstName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
              {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Last name<span className="text-red-500">*</span></label>
              <input name="lastName" value={form.lastName} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
              {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Work Email<span className="text-red-500">*</span></label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone number<span className="text-red-500">*</span></label>
              <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
              {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Company name<span className="text-red-500">*</span></label>
              <input name="company" value={form.company} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
              {errors.company && <span className="text-red-500 text-xs">{errors.company}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Country<span className="text-red-500">*</span></label>
              <select name="country" value={form.country} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Please Select</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              {errors.country && <span className="text-red-500 text-xs">{errors.country}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Job title<span className="text-red-500">*</span></label>
              <input name="jobTitle" value={form.jobTitle} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
              {errors.jobTitle && <span className="text-red-500 text-xs">{errors.jobTitle}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Contact About<span className="text-red-500">*</span></label>
              <select name="contactAbout" value={form.contactAbout} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Please Select</option>
                {contactAboutOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              {errors.contactAbout && <span className="text-red-500 text-xs">{errors.contactAbout}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Contact Preference<span className="text-red-500">*</span></label>
              <select name="contactPreference" value={form.contactPreference} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Please Select</option>
                {contactPreferences.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              {errors.contactPreference && <span className="text-red-500 text-xs">{errors.contactPreference}</span>}
            </div>
            <div>
              <label className="block mb-1 font-medium">Industry<span className="text-red-500">*</span></label>
              <select name="industry" value={form.industry} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Please Select</option>
                {industries.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              {errors.industry && <span className="text-red-500 text-xs">{errors.industry}</span>}
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Description<span className="text-red-500">*</span></label>
            <textarea name="description" value={form.description} onChange={handleChange} required className="w-full border rounded px-3 py-2" rows={4} />
            {errors.description && <span className="text-red-500 text-xs">{errors.description}</span>}
          </div>
          <div className="mb-4 flex justify-center">
            {/* Placeholder for reCAPTCHA */}
            <div className="bg-gray-100 border rounded p-4 w-64 flex flex-col items-center">
              <span className="text-gray-500 mb-2">protected by reCAPTCHA</span>
              <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-12 h-12" />
            </div>
          </div>
          <div className="mb-2 text-xs text-gray-600">
            By clicking 'Submit' you agree to our <a href="#" className="text-blue-600 underline">Terms & Conditions</a> and consent to us collecting your details for the purposes of your enquiry. Visit our <a href="#" className="text-blue-600 underline">privacy policy</a> for more information about our services, how we may use, process and share your personal data, including information on your rights in respect of your personal data and how you can unsubscribe from future marketing communications. Our services are intended for corporate subscribers and you warrant that the email address submitted is your corporate email address.
          </div>
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded mt-4 hover:bg-orange-600">Submit</button>
        </form>
      </div>
    </main>
  );
}
 