import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import './Countdown.css';

interface CountdownEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
  type: 'reunion' | 'anniversary' | 'special';
  emoji: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const [events] = useState<CountdownEvent[]>([
    {
      id: '1',
      title: 'Our Next Reunion',
      date: new Date('2024-12-31T00:00:00'),
      description: 'The moment I can hold you in my arms again',
      type: 'reunion',
      emoji: '✈️'
    },
    {
      id: '2',
      title: 'Our Anniversary',
      date: new Date('2024-12-22T00:00:00'),
      description: 'Celebrating another year of our beautiful love story',
      type: 'anniversary',
      emoji: '💕'
    },
    {
      id: '3',
      title: 'Valentine\'s Day',
      date: new Date('2025-02-14T00:00:00'),
      description: 'A day to celebrate our endless love',
      type: 'special',
      emoji: '💝'
    }
  ]);

  const [selectedEvent, setSelectedEvent] = useState<CountdownEvent>(events[0]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isCountdownComplete, setIsCountdownComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const calculateTimeLeft = (targetDate: Date): TimeLeft => {
    const now = new Date();
    
    if (targetDate <= now) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = differenceInDays(targetDate, now);
    const hours = differenceInHours(targetDate, now) % 24;
    const minutes = differenceInMinutes(targetDate, now) % 60;
    const seconds = differenceInSeconds(targetDate, now) % 60;

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(selectedEvent.date);
      setTimeLeft(newTimeLeft);
      
      const isComplete = newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
                        newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0;
      
      if (isComplete && !isCountdownComplete) {
        setIsCountdownComplete(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      } else if (!isComplete) {
        setIsCountdownComplete(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedEvent.date, isCountdownComplete]);

  const handleEventChange = (event: CountdownEvent) => {
    setSelectedEvent(event);
    setIsCountdownComplete(false);
    setShowConfetti(false);
  };

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
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="confetti-piece"
              initial={{ 
                y: -100, 
                x: Math.random() * window.innerWidth,
                rotate: 0,
                opacity: 1
              }}
              animate={{ 
                y: window.innerHeight + 100,
                rotate: 360,
                opacity: 0
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                ease: 'easeOut',
                delay: Math.random() * 2
              }}
            >
              {['💖', '💕', '💝', '🌹', '✨'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>
      )}

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
          className="event-selector"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {events.map((event) => (
            <motion.button
              key={event.id}
              className={`event-btn ${selectedEvent.id === event.id ? 'active' : ''}`}
              onClick={() => handleEventChange(event)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="event-emoji">{event.emoji}</span>
              <span className="event-title">{event.title}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="countdown-main"
          variants={countdownVariants}
          initial="initial"
          animate={isCountdownComplete ? "pulse" : "animate"}
          transition={{ 
            duration: 0.6,
            repeat: isCountdownComplete ? Infinity : 0,
            repeatType: "reverse"
          }}
        >
          <div className="event-info">
            <h2 className="event-name">{selectedEvent.title}</h2>
            <p className="event-description">{selectedEvent.description}</p>
          </div>

          {isCountdownComplete ? (
            <motion.div 
              className="celebration"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
              <div className="celebration-emoji">🎉</div>
              <h3>The moment has arrived!</h3>
              <p>Our special day is finally here! 💖</p>
            </motion.div>
          ) : (
            <div className="countdown-display">
              <div className="time-units">
                <motion.div 
                  className="time-unit"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                >
                  <div className="time-number">{timeLeft.days}</div>
                  <div className="time-label">Days</div>
                </motion.div>
                
                <motion.div 
                  className="time-unit"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0.2 }}
                >
                  <div className="time-number">{timeLeft.hours}</div>
                  <div className="time-label">Hours</div>
                </motion.div>
                
                <motion.div 
                  className="time-unit"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3, delay: 0.4 }}
                >
                  <div className="time-number">{timeLeft.minutes}</div>
                  <div className="time-label">Minutes</div>
                </motion.div>
                
                <motion.div 
                  className="time-unit seconds"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <div className="time-number">{timeLeft.seconds}</div>
                  <div className="time-label">Seconds</div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div 
          className="countdown-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="message-content">
            <div className="heart-decoration">💕</div>
            <p className="romantic-quote">
              "Distance means nothing when someone means everything. Can't wait to hold my beautiful chaos again."
            </p>
            <div className="heart-decoration">💕</div>
          </div>
        </motion.div>

        <motion.div 
          className="upcoming-events"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3>Our Special Moments Ahead</h3>
          <div className="events-preview">
            {events.filter(event => event.id !== selectedEvent.id).map((event, index) => {
              const eventTimeLeft = calculateTimeLeft(event.date);
              return (
                <motion.div 
                  key={event.id}
                  className="preview-event"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  onClick={() => handleEventChange(event)}
                >
                  <div className="preview-emoji">{event.emoji}</div>
                  <div className="preview-info">
                    <div className="preview-title">{event.title}</div>
                    <div className="preview-time">
                      {eventTimeLeft.days > 0 ? `${eventTimeLeft.days} days` : 
                       eventTimeLeft.hours > 0 ? `${eventTimeLeft.hours} hours` : 
                       `${eventTimeLeft.minutes} minutes`}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Countdown;