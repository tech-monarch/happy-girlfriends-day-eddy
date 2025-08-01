import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoveLetters.css';

interface Letter {
  id: number;
  title: string;
  content: string;
  date: string;
  mood: string;
}

const LoveLetters: React.FC = () => {
  const [letters, setLetters] = useState<Letter[]>([
    {
      id: 1,
    title: "To My Pretty Flower",
    content: "I don’t even know how to explain this, but every time I’m not talking to you, there’s this empty space in me. Like something’s missing. I catch myself smiling randomly when I think about you, and trust me, that happens a lot.\n\nYou’ve made me feel safe in a way I didn’t even know I needed. I’ve never been this sure about someone before. I don’t just love you, I like you, your laugh, your mood swings, the way you talk about random things like they’re the most important thing in the world.\n\nI pray for us. Every night. That we stay together, grow together, and keep choosing each other no matter what. You’re my person.",
    date: "August 1, 2025",
    mood: "💕"
  },
  {
    id: 2,
    title: "To My Baby",
    content: "I don’t know if I tell you this enough, but I really, really love you. Not just because you’re beautiful, but because being with you feels like peace. You’ve seen me at my worst, and somehow, you still look at me like I’m enough.\n\nI love that I can talk to you about everything, my fears, my dreams, my stupid thoughts. I love how you make me want to be better without even asking me to. I love you for being you.\n\nAnd I can’t wait for the day I can hold you and say all of this in person.",
    date: "August 1, 2025",
    mood: "🌹"
  },
  {
    id: 4,
    title: "To My Forever",
    content: "Sometimes I think about the future, and no matter what picture I paint in my head, you’re always in it. I can’t see my life without you anymore. You’re not just part of my story, you are my story.\n\nThank you for loving me, even when I don’t deserve it. Thank you for believing in me, for trusting me, for choosing me every day. You’re more than my girl, you’re my best friend, my safe space, and honestly, my favorite human in this world.\n\nI love you. Always will.",
    date: "August 1, 2025",
    mood: "💖"
  },
    {
      id: 5,
      title: "Forever Starts With You, Edeline",
      content: "I've been thinking about our future a lot lately, and it fills me with so much excitement and joy. I imagine lazy Sunday mornings together, cooking breakfast while dancing in the kitchen, and falling asleep next to my beautiful chaos every night. The distance is temporary, but our love is eternal. Every challenge we face only proves how strong we are together. I'm so grateful to have found my person in you, my pretty flower.",
      date: "January 2, 2025",
      mood: "✨"
    }
  ]);

  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [showNewLetterForm, setShowNewLetterForm] = useState(false);
  const [newLetter, setNewLetter] = useState({ title: '', content: '', mood: '💕' });

  const moodOptions = ['💕', '💖', '💗', '💝', '💘', '❤️', '', '💜', '✨', '🌟', '🥹'];

  const handleAddLetter = () => {
    if (newLetter.title.trim() && newLetter.content.trim()) {
      const letter: Letter = {
        id: Date.now(),
        title: newLetter.title,
        content: newLetter.content,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        mood: newLetter.mood
      };
      setLetters([letter, ...letters]);
      setNewLetter({ title: '', content: '', mood: '💕' });
      setShowNewLetterForm(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="love-letters-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="page-header" variants={itemVariants}>
          <h1 className="romantic-title">Love Letters for my Queen❤️</h1>
          <p className="romantic-subtitle">
            Words from my heart..
          </p>
          <motion.button
            className="romantic-button add-letter-btn"
            onClick={() => setShowNewLetterForm(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✍️ Write a New Letter
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {showNewLetterForm && (
            <motion.div
              className="new-letter-modal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modal-content">
                <h3>Write a New Love Letter</h3>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    value={newLetter.title}
                    onChange={(e) => setNewLetter({...newLetter, title: e.target.value})}
                    placeholder="Give your letter a beautiful title..."
                  />
                </div>
                <div className="form-group">
                  <label>Mood</label>
                  <div className="mood-selector">
                    {moodOptions.map((mood) => (
                      <button
                        key={mood}
                        className={`mood-option ${newLetter.mood === mood ? 'selected' : ''}`}
                        onClick={() => setNewLetter({...newLetter, mood})}
                      >
                        {mood}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    value={newLetter.content}
                    onChange={(e) => setNewLetter({...newLetter, content: e.target.value})}
                    placeholder="Pour your heart out..."
                    rows={6}
                  />
                </div>
                <div className="modal-actions">
                  <button 
                    className="romantic-button secondary"
                    onClick={() => setShowNewLetterForm(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="romantic-button"
                    onClick={handleAddLetter}
                  >
                    💌 Send Letter
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="letters-grid" variants={itemVariants}>
          {letters.map((letter) => (
            <motion.div
              key={letter.id}
              className="letter-card"
              layoutId={`letter-${letter.id}`}
              onClick={() => setSelectedLetter(letter)}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                boxShadow: "0 15px 40px rgba(155, 93, 229, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="letter-header">
                <span className="letter-mood">{letter.mood}</span>
                <span className="letter-date">{letter.date}</span>
              </div>
              <h3 className="letter-title">{letter.title}</h3>
              <p className="letter-preview">
                {letter.content.substring(0, 120)}...
              </p>
              <div className="read-more">Click to read full letter 💕</div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              className="letter-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLetter(null)}
            >
              <motion.div
                className="letter-content"
                layoutId={`letter-${selectedLetter.id}`}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <button 
                  className="close-btn"
                  onClick={() => setSelectedLetter(null)}
                >
                  ✕
                </button>
                <div className="letter-full-header">
                  <span className="letter-mood-large">{selectedLetter.mood}</span>
                  <div>
                    <h2 className="letter-full-title">{selectedLetter.title}</h2>
                    <p className="letter-full-date">{selectedLetter.date}</p>
                  </div>
                </div>
                <div className="letter-full-content">
                  {selectedLetter.content}
                </div>
                <div className="letter-signature">
                  With all my love,<br/>
                  Forever yours 💕
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoveLetters;