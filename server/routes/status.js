const express = require('express');
const router = express.Router();

// Full player stats (emotional + physical + mental)
const stats = {
  emotionalStats: {
    confidence: 75,
    anxiety: 40,
    focus: 60,
    willpower: 50
  },
  physicalStats: {
    strength: 11,
    stamina: 9,
    agility: 7
  },
  mentalStats: {
    mentalStrength: 8,
    memory: 6
  }
};

// get all player stats
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    stats: stats
  });
});

// Individual routes
router.get('/emotions', (req, res) => {
  res.status(200).json({
    success: true,
    stats: stats.emotionalStats
  });
});

router.get('/physical', (req, res) => {
  res.status(200).json({
    success: true,
    stats: stats.physicalStats
  });
});

router.get('/mental', (req, res) => {
  res.status(200).json({
    success: true,
    stats: stats.mentalStats
  });
});

module.exports = router;
