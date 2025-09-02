import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Countdown.css';

interface CountdownEvent {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

const Countdown: React.FC = () => {
  const [event] = useState<CountdownEvent>({
    id: '1',
    title: 'Our Next Reunion',
    description: 'The moment I can hold you in my arms again',
    emoji: '✈️'
  });

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const countdownVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    pulse: { scale: [1, 1.05, 1] }
  };

  return (
    <motion.div 
      className="countdown-page"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container">
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1>Countdown to Hold Eddy Again</h1>
          <p>Every second brings me closer to my beautiful chaos</p>
        </motion.div>

        <motion.div 
          className="countdown-main"
          variants={countdownVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          <div className="event-info">
            <h2 className="event-name">{event.title}</h2>
            <p className="event-description">{event.description}</p>
          </div>

          <div className="countdown-display">
            <div className="time-units">
              <motion.div 
                className="time-unit"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                <div className="time-number">246</div>
                <div className="time-label">Days</div>
              </motion.div>

              {/*
              Other time units removed since we only need fixed days
              */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Countdown;
