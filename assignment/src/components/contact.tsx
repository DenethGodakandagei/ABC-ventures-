"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "Restaurant Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          subject: "Restaurant Inquiry",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-8xl p-8 w-full">
        {/* Left Side */}
        <div className="w-full md:w-3/4 mx-auto">
          <h2 className="text-6xl font-bold Playfair">
            <span className="text-[var(--color-brand)]">Get</span>{" "}
            <span className="text-yellow-600">in Touch</span>
          </h2>
          <p className="text-yellow-600 mt-2 justify-end font-bold flex ">
            CONNECT WITH US
          </p>
          <p className="mt-4 text-gray-700">
            Ready To Experience The Finest In Hospitality? Contact Us To Learn
            More About Our Restaurants, Services, Or Partnership Opportunities.
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[var(--color-brand)] text-xl" />
              <div>
                <p className="text-[var(--color-brand)] font-semibold">Visit Us</p>
                <p className="text-gray-600">City, Country</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[var(--color-brand)] text-xl" />
              <div>
                <p className="text-[var(--color-brand)] font-semibold">Email Us</p>
                <p className="text-gray-600">info@abcventures.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[var(--color-brand)] text-xl" />
              <div>
                <p className="text-[var(--color-brand)] font-semibold">Call Us</p>
                <p className="text-gray-600">+XXX XXXX XXXX</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white rounded-lg p-6  w-full"
        >
          <h3 className="text-lg font-semibold tracking-wide Playfair">
            SEND YOUR MESSAGE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="p-3 rounded-tl-2xl rounded-br-2xl bg-gray-100 w-full"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="p-3 rounded-tl-2xl rounded-br-2xl bg-gray-100 w-full"
            />
          </div>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 rounded-tl-2xl rounded-br-2xl bg-gray-100 w-full"
          >
            <option>Restaurant Inquiry</option>
            <option>Partnership</option>
            <option>Services</option>
            <option>Other</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows={5}
            required
            className="p-3 rounded-tl-2xl rounded-br-2xl bg-gray-100 w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--color-brand)] hover:bg-rose-800 rounded-tl-2xl rounded-br-2xl text-white px-6 py-3 transition justify-end"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="mt-3 text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
