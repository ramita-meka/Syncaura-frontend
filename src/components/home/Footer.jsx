import React, { useState } from 'react';
import { Facebook, Instagram, X, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerStatus, setFooterStatus] = useState('');

  const handleFooterSubmit = (e) => {
    e.preventDefault();
    
    if (!footerEmail) {
      setFooterStatus('Please enter an email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(footerEmail)) {
      setFooterStatus('Please enter a valid email address');
      return;
    }

    setFooterStatus('Subscribed successfully!');
    setFooterEmail('');
    
    setTimeout(() => {
      setFooterStatus('');
    }, 3000);
  };

  return (
    <>
     

      {/* Footer */}
      <footer className="w-full border-t" style={{ 
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color)' 
      }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-20 py-10 md:py-16">
          
          {/* DESKTOP Layout - Keep Original (hidden on mobile) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 lg:gap-20">
            
            {/* FlowBit Section */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>FlowBit</h3>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Get updates on new features and product releases.
              </p>

              {/* Email Form */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full md:w-[280px] lg:w-[344px] h-[44px] px-4 border rounded-lg text-sm focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
                <button 
                  className="w-full md:w-auto h-[44px] px-6 border text-sm font-medium rounded-lg transition" 
                  style={{ 
                    borderColor: 'var(--accent-color)',
                    backgroundColor: 'var(--accent-color)',
                    color: "var(--bg-primary)"
                  }}
                >
                  Subscribe
                </button>
              </div>

              <p className="text-xs max-w-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                You agree to our Privacy Policy and consent to receive company updates.
              </p>
            </div>

            {/* Product Section */}
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Product</h4>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {["Features", "Pricing", "Security", "Roadmap", "Company"].map(item => (
                  <li key={item} className="hover:opacity-70 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>About</h4>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                {["Blog", "Careers", "Contact", "Follow us", "Facebook"].map(item => (
                  <li key={item} className="hover:opacity-70 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Section */}
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Instagram</h4>
              <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center gap-3 hover:opacity-70 cursor-pointer">
                  <Facebook size={16} /> Facebook
                </li>
                <li className="flex items-center gap-3 hover:opacity-70 cursor-pointer">
                  <X size={16} /> X
                </li>
                <li className="flex items-center gap-3 hover:opacity-70 cursor-pointer">
                  <Instagram size={16} /> Instagram
                </li>
                <li className="flex items-center gap-3 hover:opacity-70 cursor-pointer">
                  <Linkedin size={16} /> LinkedIn
                </li>
                <li className="flex items-center gap-3 hover:opacity-70 cursor-pointer">
                  <Youtube size={16} /> YouTube
                </li>
              </ul>

              <p className="text-xs mt-6" style={{ color: 'var(--text-secondary)' }}>
                © 2025 Flowbit. All rights reserved.
              </p>
            </div>
          </div>

          {/* MOBILE Layout - NEW 3 Column Grid (shown only on mobile) */}
          <div className="grid grid-cols-3 gap-6 md:hidden mb-10">
            
            {/* Product Column */}
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                Product
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="hover:opacity-70 cursor-pointer">Features</li>
                <li className="hover:opacity-70 cursor-pointer">Pricing</li>
                <li className="hover:opacity-70 cursor-pointer">Security</li>
                <li className="hover:opacity-70 cursor-pointer">Roadmap</li>
                <li className="hover:opacity-70 cursor-pointer">Company</li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                About
              </h4>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="hover:opacity-70 cursor-pointer">Blog</li>
                <li className="hover:opacity-70 cursor-pointer">Careers</li>
                <li className="hover:opacity-70 cursor-pointer">Contact</li>
                <li className="hover:opacity-70 cursor-pointer">Follow us</li>
                <li className="hover:opacity-70 cursor-pointer">Facebook</li>
              </ul>
            </div>

            {/* Social Icons Column */}
            <div>
              <h4 className="text-sm font-semibold mb-4 invisible">Social</h4>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-center gap-2 hover:opacity-70 cursor-pointer">
                  <Facebook size={18} className="flex-shrink-0" /> Facebook
                </li>
                <li className="flex items-center gap-2 hover:opacity-70 cursor-pointer">
                  <Instagram size={18} className="flex-shrink-0" />Instagram
                </li>
                <li className="flex items-center gap-2 hover:opacity-70 cursor-pointer">
                  <X size={18} className="flex-shrink-0" /> X
                </li>
                <li className="flex items-center gap-2 hover:opacity-70 cursor-pointer">
                  <Linkedin size={18} className="flex-shrink-0" />Linkdin
                </li>
                <li className="flex items-center gap-2 hover:opacity-70 cursor-pointer">
                  <Youtube size={18} className="flex-shrink-0" />Youtube
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section - Same for both mobile and desktop */}
          <div className="mt-10 md:mt-16 border-t pt-6" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Left: Terms of Service */}
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Terms of Service
              </div>
              
              {/* Right: Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <span className="hover:opacity-70 cursor-pointer underline">Cookies Settings</span>
                <span className="hover:opacity-70 cursor-pointer underline">Terms of service</span>
                <span className="hover:opacity-70 cursor-pointer underline">Privacy policy</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;