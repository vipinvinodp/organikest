'use client';

import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from '../components/Navbar';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Centered Contact Card */}
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-md bg-white shadow-lg rounded-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h1>
         <p className="text-gray-700 mb-6">We&#39;d love to hear from you!</p>

          <div className="flex justify-center space-x-8">
            {/* Phone */}
            <a
              href="tel:+917907997813"
              className="text-green-700 hover:text-green-900 transition flex flex-col items-center"
            >
              <FiPhone size={32} />
              <span className="text-sm mt-1">Call Us</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://chat.whatsapp.com/HOlg0opyw0u6pypI6TkdYd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:text-green-900 transition flex flex-col items-center"
            >
              <FaWhatsapp size={32} />
              <span className="text-sm mt-1">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer (optional) */}
      <footer className="text-center text-xs text-gray-500 py-4">
        © {new Date().getFullYear()} OrganiKeSt. All rights reserved.
      </footer>
    </div>
  );
}
