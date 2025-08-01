import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FloatingHearts.css';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const heartEmojis = ['💕', '💖', '💗', '💝', '💘', '❤️', '🤍', '💜'];

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 20 + 15,
          duration: Math.random() * 10 + 8,
          delay: Math.random() * 5,
          emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          initial={{
            x: `${heart.x}vw`,
            y: '100vh',
            opacity: 0,
            scale: 0
          }}
          animate={{
            y: '-20vh',
            opacity: [0, 0.7, 0.7, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            fontSize: `${heart.size}px`,
            left: 0,
            position: 'fixed'
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;