"use client";
import React from "react";
import BrandLogo from "../navbar/BrandLogo";
import Button from "../button/Button";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-20 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {/* First Column: Logo, Description, and Contact Button */}
        <div className="lg:col-span-3 md:col-span-2">
          <BrandLogo />
          <p className="my-4 text-gray-400">
            We provide top-quality services to help you grow your business.
            Contact us today to learn more about how we can help you succeed.
          </p>
          <Button className="font-bold py-2 px-4 rounded-2xl">
            Contact Us
          </Button>
        </div>

        {/* Second Column: Services */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                UI-UX design
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Mobile App
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Web Design & Development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Monthly Design
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Digital Marketing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                CMS Website
              </a>
            </li>
          </ul>
        </div>

        {/* Third Column: Other Services */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/packages" className="text-gray-400 hover:text-white">
                Packages
              </a>
            </li>
            <li>
              <a href="/ourwork" className="text-gray-400 hover:text-white">
                Our Work
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Contact Information */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">Facebook</li>
            <li className="text-gray-400">Linkedin</li>
            <li className="text-gray-400">Pinterest</li>
            <li className="text-gray-400">Dribble</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white mt-8 pt-4 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} Brandio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
