import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Memories.css';

interface Memory {
  id: number;
  title: string;
  description: string;
  date: string;
  story: string;
  location: string;
}

const Memories: React.FC = () => {
  const [memories, setMemories] = useState<Memory[]>([
    {
      id: 1,
      title: "First Call with Youuu",
      description: "The moment I first heard your beuatiful voice over the call... Damn, Melody🤧❤️.",
      date: "",
      story: "I'll never forget the butterflies I felt when I first heard your voice on that call😭💕\n. You voice became my favourite melody. That was the moment I knew you were someone special, someone who would change my life forever.",
      location: "Voice Call"
    },
    {
      id: 2,
      title: "Late Night Conversations with My Pretty Flower",
      description: "Talking until the early hours with youuu, sharing dreams, fears, and everything in between. These moments made us closer.",
      date: "",
      story: "Those late night conversations where we talked about everything and nothing. Time seemed to stop when we were together, even virtually. We shared our deepest thoughts, our wildest dreams, and our biggest fears. Those moments made me realize how perfectly we connect, how easily we understand each other.",
      location: "Our Hearts"
    },
    {
      id: 3,
      title: "Our First 'Good Morning'",
      description: "That sweet message that started our daily tradition. Every morning feels brighter knowing I'll hear from my beautiful chaos.",
      date: "December 22, 2024",
      story: "Waking up to your good morning messages became my favorite part of every day. Your words were like sunshine breaking through my window, filling my heart with warmth and love. No matter how far apart we are, you're always the first thing on my mind when I wake up.",
      location: "Every Morning"
    },
    {
      id: 4,
      title: "Planning Our Future",
      description: "Dreaming about the day we'll be together",
      date: "Everytime😹",
      story: "The hours we spend planning our future together - where we'll live, the places we'll visit, the life we'll build. Every plan we make feels like a promise, a step closer to our forever. These conversations fill me with so much hope and excitement for what's to come.",
      location: "Our Dreams"
    },
    {
      id: 5,
      title: "Through Our Arguments",
      description: "How our fights made us stronger",
      date: "",
      //imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop",
      story: "We’ve argued, sometimes over small things and sometimes over things that cut deep. But somehow, every fight has taught us something about each other, how we love, how we hurt, how we heal. It wasn’t the arguments that defined us, but how we always found our way back to each other. Those moments showed me that real love isn’t perfect; it’s two people choosing to stay, even when it’s hard. ",
      location: "In the space between our hearts"
    },
    {
      id: 6,
      title: "Our First Valentine’s💕",
      description: "Our first love day together, even from afar",
      date: "February 14, 2025",
      //imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop",
      story: "It was our first Valentine’s, not just together, but our first ever. Even though we were far apart, it still felt special. We proved that distance couldn’t stop love from feeling real. That day made me sure I wanted every Valentine’s with you.",
      location: "Miles apart, but closer than ever"
    },
    {
      id: 7,
      title: "February 15",
      description: "The first time we broke apart💔",
      date: "February 15, 2025",
      //imageUrl: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=300&fit=crop",
      story: "February 15 is a day I can’t forget, the day we first broke apart. I remember how heavy my chest felt, like I couldn’t breathe without you there. It was the first time I realized how much I loved you, because losing you, even for a moment, hurt more than anything I’d felt before.\n\nThat break changed us. It forced me to think about what you truly meant to me and why I couldn’t imagine a life without you in it. Coming back from that break wasn’t just about fixing things, it was about choosing each other all over again. And I’d choose you every single time.",
      location: "The quiet space between us"
    },    
    {
      id: 8,
      title: "The Night of Secrets🤧",
      description: "The night we opened up completely",
      date: "April 13, 2025",
      //imageUrl: "https://images.unsplash.com/photo-1527979809431-ea3f3c2c2c4d?w=400&h=300&fit=crop",
      story: "April 13 was different. That night, we let each other in deeper than ever before. We shared childhood secrets, the kind that shaped who we are but we rarely tell anyone. It felt safe, like I could hand you every part of me and you’d still stay. That night made me love you even more, not for your perfect side, but for your real side.",
      location: "In the quiet of our hearts"
    },
    {
      id: 9,
      title: "One of your most vulnerable moments💝",
      description: "When you told me what your biggest fear was❤️",
      story: "Okay\nMy biggest fear is that I won't be appreciating you and stuff just yk taking you for will I say granted yes taking you for granted\nAnd then you realise and leave me and go for another girl\nAnd then me I'll be left like da\n\nHeartbroken\nSo, when you said this\nI was like Hmmm\nAnd ofc no man will Really love me as much as you do\nAnd I'll settle for the bare minimum💔",
      date: "May 14, 2025",
      location: "💔"
    },
    
    {
      id: 10,
      title: "June 21",
      description: "The second time we broke apart💔",
      date: "June 21, 2025",
      // //imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=300&fit=crop",
      story: "June 21 felt different from February 15. We’d already been through this once, and I thought maybe we were stronger now… but it still broke me in ways I didn’t expect.\n When i heard you sob in your vn because of how exhausted you were, i was totally heart broken and didnt know what to do. \n That was the most vulnerable i have seen you and i wished for nothing but to comfort you but unfortunately i didnt know how💔... That is my greatest regret..\n\n It wasn’t just about missing you this time, it was about wondering if we’d ever find our way back again.\n\nAnd yet, even in the middle of all that silence, all that distance, I knew something for sure... I still wanted you. We both came back, not because it was easy, but because we couldn’t stay apart. That day reminded me that love isn’t about never breaking, it’s about finding your way back, every time.\n\n(i lowk cried while writing this)",
      location: "Between hope and heartbreak"
    },
    {
      id: 11,
      title: "How Far We’ve Come",
      description: "Looking back at our journey together💝",
      date: "August 1, 2025",
      //imageUrl: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop",
      story: "Today I just sat back and thought about how far we’ve come. From our first calls to late night talks, through fights, breaks, and making up, we’ve grown so much. We’ve learned each other’s hearts, flaws, and dreams, and somehow it’s only made us stronger. I’m proud of us, and I know this is only the beginning. I love the ‘us’ we’ve become🥹.",
      location: "Right here, right now"
    }
    
    

    
    
  ]);

  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateY: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="memories-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <motion.div className="page-header" variants={itemVariants}>
          <h1 className="romantic-title">Our Memories, Eddy</h1>
          <p className="romantic-subtitle">
            Precious moments with my pretty flower, captured in time
          </p>
          <p className="romantic-subtitle">
            (ps..click the cards)
          </p>
        </motion.div>

        <motion.div className="memories-grid" variants={containerVariants}>
          {memories.map((memory) => (
            <motion.div
              key={memory.id}
              className="memory-card polaroid"
              variants={itemVariants}
              layoutId={`memory-${memory.id}`}
              onClick={() => setSelectedMemory(memory)}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(155, 93, 229, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="polaroid-caption">
                <h3 className="memory-title">{memory.title}</h3>
                <p className="memory-description">{memory.description}</p>
                <div className="memory-meta">
                  <span className="memory-date">📅 {memory.date}</span>
                  <span className="memory-location">📍 {memory.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedMemory && (
            <motion.div
              className="memory-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMemory(null)}
            >
              <motion.div
                className="memory-story"
                layoutId={`memory-${selectedMemory.id}`}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <button 
                  className="close-btn"
                  onClick={() => setSelectedMemory(null)}
                >
                  ✕
                </button>
                

                
                <div className="story-content">
                  <div className="story-header">
                    <h2 className="story-title">{selectedMemory.title}</h2>
                    <div className="story-meta">
                      <span className="story-date">📅 {selectedMemory.date}</span>
                      <span className="story-location">📍 {selectedMemory.location}</span>
                    </div>
                  </div>
                  
                  <p className="story-text">{selectedMemory.story}</p>
                  
                  <div className="story-footer">
                    <span className="heart-decoration">💕</span>
                    <p className="story-signature">Forever in my heart</p>
                    <span className="heart-decoration">💕</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Memories;