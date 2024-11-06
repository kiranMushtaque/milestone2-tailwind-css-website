import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6 mt-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p>&copy;2024 Coffee Shop.All rights reserved</p>
        <div className="space-x-4">
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms of Service</a>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
