import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [timeData, setTimeData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  });

  useEffect(() => {
    const relationshipStart = new Date('2024-12-22T00:00:00');
    
    const updateTime = () => {
      const now = new Date();
      const days = differenceInDays(now, relationshipStart);
      const hours = differenceInHours(now, relationshipStart) % 24;
      const minutes = differenceInMinutes(now, relationshipStart) % 60;
      const seconds = differenceInSeconds(now, relationshipStart) % 60;
      const totalDays = differenceInDays(now, relationshipStart);

      setTimeData({ days, hours, minutes, seconds, totalDays });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.section className="hero-section" variants={itemVariants}>
          <h1 className="romantic-title hero-title">
            For my beautiful chaos, Eddy
          </h1>
          <p className="romantic-subtitle hero-subtitle">
            Every heartbeat brings us closer to forever, my pretty flower
          </p>
        </motion.section>

        <motion.section className="clock-section" variants={itemVariants}>
          <div className="romantic-card clock-card">
            <h2 className="clock-title">Our Love Story Timeline</h2>
            <p className="clock-subtitle"> December 22, 2024 - August 26, 2025 <br></br> I cherished every moment❤️</p>
            
            <div className="time-display">
              <div className="time-unit heartbeat">
                <span className="time-number">{timeData.totalDays}</span>
                <span className="time-label">Days Together</span>
              </div>
              <div className="time-separator">💕</div>
              <div className="time-unit">
                <span className="time-number">{timeData.hours}</span>
                <span className="time-label">Hours</span>
              </div>
              <div className="time-separator">💖</div>
              <div className="time-unit">
                <span className="time-number">{timeData.minutes}</span>
                <span className="time-label">Minutes</span>
              </div>
              <div className="time-separator">💗</div>
              <div className="time-unit">
                <span className="time-number">{timeData.seconds}</span>
                <span className="time-label">Seconds</span>
              </div>
            </div>

            <div className="love-quote">
              <p>" you are my wildest dream,<br></br>
The perfect figment I never want to lose.<br></br>

You’re the ink bleeding onto my empty pages,<br></br>
The brushstroke coloring my gray,<br></br>
<b>The breath I hold when the world forgets to care,</b><br></br>
The art I’m quietly proud to call my own,<br></br>My beautiful Chaos."</p>
              <span className="quote-author">- Oddy</span>
            </div>
          </div>
        </motion.section>

        <motion.section className="features-preview" variants={itemVariants}>
          <div className="features-grid">
            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate('/letters')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">💌</div>
              <h3>Love Letters from mee</h3>
              <p>Heartfelt messages for my pretty lady</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate('/her-letters')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">💕</div>
              <h3>Her Letters</h3>
              <p>Some of my favourite messages from you🤧</p>
            </motion.div>

            <motion.div 
              className="feature-card"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate('/memories')}
              style={{ cursor: 'pointer' }}
            >
              <div className="feature-icon">📸</div>
              <h3>Our Memories</h3>
              <p>Precious moments with my beautiful chaos 💕</p>
            </motion.div>

 
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;