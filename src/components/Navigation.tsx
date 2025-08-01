import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/letters', label: 'Love Letters', icon: '💌' },
    { path: '/her-letters', label: 'Her Letters', icon: '💕' },
    { path: '/memories', label: 'Memories', icon: '📸' },
    { path: '/flowers', label: 'Virtual Flowers', icon: '🌸' }
  ];

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Happy Girlfriend's Dayyy</span>
          <span className="logo-heart">💕</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                 to={item.path}
                 className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                 onClick={() => setIsOpen(false)}
               >
                 <span className="nav-icon">{item.icon}</span>
                 <span className="nav-label">{item.label}</span>
               </Link>
            </motion.div>
          ))}
        </div>

        <div 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;