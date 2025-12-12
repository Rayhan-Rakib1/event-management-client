"use client";

import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="px-6 py-10 md:px-20">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-8">Get in touch with our team</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            <textarea
              rows={5}
              placeholder="Your message"
              className="w-full px-4 py-3 border rounded-lg"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>

            <button className="w-full bg-red-500 text-white py-3 rounded-lg">
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-4 bg-green-100 border text-green-700 px-4 py-3 rounded-lg flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Message sent successfully!
            </div>
          )}
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div className="bg-red-500 text-white rounded-2xl p-8">
            <Mail className="w-10 h-10 mb-4" />
            <p>support@eventsactivities.com</p>
            <p>info@eventsactivities.com</p>
          </div>

          <div className="bg-indigo-600 text-white rounded-2xl p-8">
            <Phone className="w-10 h-10 mb-4" />
            <p>+880 1234-567890</p>
          </div>

          <div className="bg-green-600 text-white rounded-2xl p-8">
            <MapPin className="w-10 h-10 mb-4" />
            <p>Maijdi, Chittagong</p>
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
