'use client'

// components/ContactForm.jsx
import { useState } from 'react';
import { User, Mail } from 'lucide-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-neutral-950 rounded-lg shadow-lg p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-neutral-50 mb-2">Let&apos;s Get In Touch.</h1>
        <p className="text-neutral-400">
          Or just reach out manually to us at <a href="mailto:skillforge@edu.in" className="text-blue-400 hover:underline">skillforge@edu.in</a>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-neutral-300 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500 pointer-events-none" />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500 pointer-events-none" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-neutral-50 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 hover:bg-purple-700 disabled:opacity-50 text-neutral-50 font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Form →'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm
