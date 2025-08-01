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

const HerLetters: React.FC = () => {
  const [letters, setLetters] = useState<Letter[]>([
    {
      id: 1,
      title: "Happy Birthday Princess 😹💕",
      content: "Happy birthday to my husband, the love of my life, my joy giverrr, my princessss, my batman, my personal AI, my boyfrienddd 🫶, my happiness 🥹❤️\n\nI wish you long life and prosperity ✨\nMore deals to youuu ✨\nMay your secret prayers be answered 💕\nI pray that the Lord will continue to bless, guide and strengthen you in every area of your life 🫶🏽\nKeep being the amazing person that you are 🥹🫶🏽\nI LOVE YOU SOOO MUCHHHHH 🥺❤️\n\nAs you celebrate this special dayyy I just want you to know that I am lucky to have you — you make life better 🥹\nI can't even start to say how much better my life is with you in it. You've shown me what true love is 🥺 and I'll forever be grateful for having you in my life.\nThank you for showing me that true love exists 😭❤️❤️\nThank you for bringing so much happiness into my life 🥺😭\n\nEveryday with you is a reminder of how beautiful life can be 🥹\nI promise to always love you, support you and stand by you no matter the circumstances 🫠💕\nI love you, words can't express how much I actually do 🤧\n\nHere's to many more beautiful memories together ✨🥂\n\nI hope you have a wonderful and amazing day 🤧❤️❤️\nI LOVE YOUU SOOOO MUCHHHHHHH 😙❤️❤️",
      date: "January 26, 2025",
      mood: "💕"
    },    
    {
      id: 2,
      title: "Random Love message you gave me when i asked you to make me cry🤧😹❤️",
      content: "I know I can be a lot sometimes - my mood swings, my overthinking, my need for constant reassurance. But you handle all of it with such patience and love. You never make me feel like I'm too much.\n\nI love how you call me your beautiful chaos because that's exactly what I am, and somehow you love me for it. Thank you for choosing me every day, even on the days when I'm not easy to love.",
      date: "August 10, 2025",
      mood: "🌹"
    },    
    {
      id: 3,
      title: "When you told me what your biggest fear was❤️",
      content: "Okay\nMy biggest fear is that I won't be appreciating you and stuff just yk taking you for will I say granted yes taking you for granted\nAnd then you realise and leave me and go for another girl\nAnd then me I'll be left like da\n\nHeartbroken\nSo, when you said this\nI was like Hmmm\nAnd ofc no man will Really love me as much as you do\nAnd I'll settle for the bare minimum💔",
      date: "May 14, 2025",
      mood: "💔"
    }
    
  ]);

  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
  const [showNewLetterForm, setShowNewLetterForm] = useState(false);
  const [newLetter, setNewLetter] = useState({ title: '', content: '', mood: '💕' });

  const moodOptions = ['💕', '💖', '💗', '💝', '💘', '❤️', '🤍', '💜', '✨', '🌟'];

  const handleAddLetter = () => {
    if (newLetter.title.trim() && newLetter.content.trim()) {
      const letter: Letter = {
        id: letters.length + 1,
        title: newLetter.title,
        content: newLetter.content,
        date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        mood: newLetter.mood
      };
      setLetters([...letters, letter]);
      setNewLetter({ title: '', content: '', mood: '💕' });
      setShowNewLetterForm(false);
    }
  };

  return (
    <motion.div 
      className="love-letters-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="love-letters-content">
        <motion.header 
          className="page-header"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1>Letters from youu💌</h1>
          <p>Beautiful words from my pretty flower to me🌚</p>
          
          <p>
            (ps..click the cards)
          </p>
        </motion.header>

        <motion.div 
          className="letters-grid"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              className="letter-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
              onClick={() => setSelectedLetter(letter)}
            >
              <div className="letter-header">
                <h3>{letter.title}</h3>
                <span className="letter-mood">{letter.mood}</span>
              </div>
              <p className="letter-preview">
                {letter.content.substring(0, 100)}...
              </p>
              <div className="letter-date">{letter.date}</div>
            </motion.div>
          ))}
          
          <motion.div
            className="letter-card add-letter-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowNewLetterForm(true)}
          >
            <div className="add-letter-content">
              <span className="add-icon">✍️</span>
              <h3>Add New Letter</h3>
              <p>Capture another beautiful moment</p>
            </div>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              className="letter-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLetter(null)}
            >
              <motion.div
                className="letter-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>{selectedLetter.title}</h2>
                  <span className="modal-mood">{selectedLetter.mood}</span>
                  <button 
                    className="close-button"
                    onClick={() => setSelectedLetter(null)}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-content">
                  <p>{selectedLetter.content}</p>
                </div>
                <div className="modal-footer">
                  <span className="modal-date">{selectedLetter.date}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showNewLetterForm && (
            <motion.div
              className="letter-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNewLetterForm(false)}
            >
              <motion.div
                className="letter-modal new-letter-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h2>Write a New Letter</h2>
                  <button 
                    className="close-button"
                    onClick={() => setShowNewLetterForm(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-content">
                  <div className="form-group">
                    <label>Title:</label>
                    <input
                      type="text"
                      value={newLetter.title}
                      onChange={(e) => setNewLetter({...newLetter, title: e.target.value})}
                      placeholder="Give your letter a title..."
                    />
                  </div>
                  <div className="form-group">
                    <label>Mood:</label>
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
                    <label>Letter:</label>
                    <textarea
                      value={newLetter.content}
                      onChange={(e) => setNewLetter({...newLetter, content: e.target.value})}
                      placeholder="Write your heart out..."
                      rows={8}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    className="cancel-button"
                    onClick={() => setShowNewLetterForm(false)}
                  >
                    Cancel
                  </button>
                  <button 
                    className="save-button"
                    onClick={handleAddLetter}
                  >
                    Save Letter
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default HerLetters;