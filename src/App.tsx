import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import LoveLetters from './pages/LoveLetters';
import HerLetters from './pages/HerLetters';
import Memories from './pages/Memories';
import VirtualFlowers from './pages/VirtualFlowers';


import FloatingHearts from './components/FloatingHearts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <FloatingHearts />
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="main-content"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/letters" element={<LoveLetters />} />
            <Route path="/her-letters" element={<HerLetters />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/flowers" element={<VirtualFlowers />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;