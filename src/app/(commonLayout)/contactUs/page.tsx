"use client"
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage(){
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-gray-600 mt-2">Get in touch with our team</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 transition"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transform hover:scale-105 transition font-semibold"
            >
              Send Message
            </button>
          </form>

          {submitted && (
            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center animate-slide-up">
              <CheckCircle className="w-5 h-5 mr-2" />
              Message sent successfully!
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-linear-to-br from-red-500 to-pink-600 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <Mail className="w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold mb-2">Email Us</h4>
            <p className="opacity-90">support@eventsactivities.com</p>
            <p className="opacity-90">info@eventsactivities.com</p>
          </div>

          <div className="bg-linear-to-br from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <Phone className="w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold mb-2">Call Us</h4>
            <p className="opacity-90">+880 1234-567890</p>
            <p className="opacity-90 text-sm mt-2">Mon–Fri: 9AM - 6PM</p>
          </div>

          <div className="bg-linear-to-br from-green-500 to-teal-600 text-white rounded-2xl shadow-lg p-8 hover:scale-105 transition">
            <MapPin className="w-10 h-10 mb-4" />
            <h4 className="text-xl font-bold mb-2">Visit Us</h4>
            <p className="opacity-90">Maijdi, Chittagong</p>
            <p className="opacity-90">Bangladesh</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 transition">
                f
              </button>
              <button className="w-12 h-12 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 transition">
                t
              </button>
              <button className="w-12 h-12 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 transition">
                in
              </button>
              <button className="w-12 h-12 bg-red-500 rounded-full text-white flex items-center justify-center hover:bg-red-600 hover:scale-110 transition">
                ig
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
