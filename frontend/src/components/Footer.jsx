import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/logo.png"
              alt="logo"
              className="w-32 h-auto mb-4"
            />
          </div>

          {/* Support Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-green-400">Support</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Street No.007 Bhilai, India</li>
              <li className="text-gray-300">avi@gmail.com</li>
              <li className="text-gray-300">+92 3106507521</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white transition">
                  Jobs
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-300 hover:text-white transition"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-green-400">Follow Us</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-white transition"
                >
                  <FaSquareXTwitter />
                  <span>Twitter (X)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-white transition"
                >
                  <FaSquareInstagram />
                  <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-white transition"
                >
                  <FaYoutube />
                  <span>Youtube</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-center md:justify-start space-x-2 text-gray-300 hover:text-white transition"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-center text-gray-400 py-4">
        &copy; 2024. All Rights Reserved by Avi
      </div>
    </>
  );
};

export default Footer;
