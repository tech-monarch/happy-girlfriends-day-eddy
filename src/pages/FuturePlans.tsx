import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FuturePlans.css';

interface Plan {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'travel' | 'milestone' | 'dream' | 'anniversary';
  completed: boolean;
  emoji: string;
  details: string;
}

const FuturePlans: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: '1',
      title: 'First Trip Together',
      description: 'Exploring Paris, the city of love',
      date: '2025-03-15',
      category: 'travel',
      completed: false,
      emoji: '🗼',
      details: 'Walking hand in hand through the streets of Paris, visiting the Eiffel Tower at sunset, and sharing croissants at a cozy café.'
    },
    {
      id: '2',
      title: 'Our First Home Together, Edeline',
      description: 'A cozy place where I can build our life with my pretty flower, filled with love, laughter, and countless memories.',
      date: '2025-06-01',
      category: 'milestone',
      completed: false,
      emoji: '🏠',
      details: 'Creating our own little sanctuary where every corner tells our story, decorating together, and making it truly ours.'
    },
    {
      id: '3',
      title: 'Beach Vacation',
      description: 'Sunset walks on the beach',
      date: '2025-08-20',
      category: 'travel',
      completed: false,
      emoji: '🏖️',
      details: 'Watching the sunrise together, building sandcastles, and dancing under the stars on the beach.'
    },
    {
      id: '4',
      title: 'Our Engagement',
      description: 'The moment I ask you to be mine forever',
      date: '2025-12-22',
      category: 'milestone',
      completed: false,
      emoji: '💍',
      details: 'The day I get down on one knee and ask you to spend forever with me, making our love official and eternal.'
    },
    {
      id: '5',
      title: 'Dream Wedding',
      description: 'Our perfect day surrounded by love',
      date: '2026-06-15',
      category: 'milestone',
      completed: false,
      emoji: '👰',
      details: 'Saying "I do" in front of our loved ones, dancing our first dance as husband and wife, and beginning our married life.'
    },
    {
      id: '6',
      title: 'Adventures Around the World with My Beautiful Chaos',
      description: 'Exploring new places hand in hand with Eddy, creating stories we\'ll tell for years to come.',
      date: '2026-07-01',
      category: 'travel',
      completed: false,
      emoji: '✈️',
      details: 'Our first adventure as a married couple, exploring new places and creating memories that will last a lifetime.'
    },
    {
      id: '7',
      title: 'Our Dream Home',
      description: 'Building the perfect nest for our family',
      date: '2027-01-01',
      category: 'dream',
      completed: false,
      emoji: '🏡',
      details: 'Designing and building our forever home, with a garden where we can watch sunsets and a cozy fireplace for winter nights.'
    },
    {
      id: '8',
      title: 'Growing Old with My Pretty Flower',
      description: 'Watching sunsets together with Edeline, sharing stories of our youth, and loving my beautiful chaos more with each passing day.',
      date: '2028-01-01',
      category: 'dream',
      completed: false,
      emoji: '👶',
      details: 'The joy of expanding our family and watching our love grow into something even more beautiful.'
    }
  ]);

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const togglePlanCompletion = (planId: string) => {
    setPlans(plans.map(plan => 
      plan.id === planId ? { ...plan, completed: !plan.completed } : plan
    ));
  };

  const filteredPlans = filter === 'all' 
    ? plans 
    : plans.filter(plan => plan.category === filter);

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

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const planVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'travel': return 'var(--secondary-pink)';
      case 'milestone': return 'var(--purple)';
      case 'dream': return 'var(--lavender)';
      case 'anniversary': return 'var(--accent-gold)';
      default: return 'var(--text-light)';
    }
  };

  return (
    <motion.div 
      className="future-plans-page"
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
          <h1>Our Future Dreams, Eddy</h1>
          <p>Building tomorrow with my beautiful chaos, one dream at a time</p>
        </motion.div>

        <motion.div 
          className="filter-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {['all', 'travel', 'milestone', 'dream', 'anniversary'].map((category) => (
            <motion.button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? '🌟 All' :
               category === 'travel' ? '✈️ Travel' :
               category === 'milestone' ? '💎 Milestones' :
               category === 'dream' ? '🌙 Dreams' :
               '💕 Anniversaries'}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="timeline"
          variants={timelineVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="timeline-line"></div>
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`timeline-item ${plan.completed ? 'completed' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={planVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPlan(plan)}
            >
              <div className="timeline-marker" style={{ backgroundColor: getCategoryColor(plan.category) }}>
                <span className="plan-emoji">{plan.emoji}</span>
              </div>
              
              <div className="timeline-content">
                <div className="plan-date">{new Date(plan.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</div>
                
                <h3 className="plan-title">{plan.title}</h3>
                <p className="plan-description">{plan.description}</p>
                
                <div className="plan-actions">
                  <motion.button
                    className={`completion-btn ${plan.completed ? 'completed' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlanCompletion(plan.id);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {plan.completed ? '✅ Achieved' : '⭕ Mark Complete'}
                  </motion.button>
                  
                  <span className={`category-tag ${plan.category}`}>
                    {plan.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedPlan && (
          <motion.div 
            className="plan-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlan(null)}
          >
            <motion.div 
              className="plan-details"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-btn"
                onClick={() => setSelectedPlan(null)}
              >
                ×
              </button>
              
              <div className="plan-header">
                <div className="plan-emoji-large">{selectedPlan.emoji}</div>
                <h2>{selectedPlan.title}</h2>
                <p className="plan-date-large">
                  {new Date(selectedPlan.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              
              <div className="plan-content">
                <p className="plan-details-text">{selectedPlan.details}</p>
                
                <div className="plan-meta">
                  <span className={`category-badge ${selectedPlan.category}`}>
                    {selectedPlan.category}
                  </span>
                  
                  <motion.button
                    className={`status-btn ${selectedPlan.completed ? 'completed' : ''}`}
                    onClick={() => {
                      togglePlanCompletion(selectedPlan.id);
                      setSelectedPlan({...selectedPlan, completed: !selectedPlan.completed});
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedPlan.completed ? '✅ Achieved' : '⭕ Mark as Achieved'}
                  </motion.button>
                </div>
              </div>
              
              <div className="plan-footer">
                <div className="heart-decoration">💕</div>
                <p className="romantic-note">
                  "Every step towards our dreams is a step towards forever together"
                </p>
                <div className="heart-decoration">💕</div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div 
          className="dreams-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="summary-content">
            <h3>Our Journey Statistics</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{plans.filter(p => p.completed).length}</div>
                <div className="stat-label">Dreams Achieved</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{plans.filter(p => !p.completed).length}</div>
                <div className="stat-label">Dreams Ahead</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{plans.filter(p => p.category === 'milestone').length}</div>
                <div className="stat-label">Milestones</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{plans.filter(p => p.category === 'travel').length}</div>
                <div className="stat-label">Adventures</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FuturePlans;