"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We&apos;dlove to hear from you!</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full mt-4 py-2 bg-blue-500 text-white rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
