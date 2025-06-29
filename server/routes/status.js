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

// Update stats Using POST
router.post('/', (req, res) => {
  const { emotionalStats, physicalStats, mentalStats } = req.body;

  if (!emotionalStats && !physicalStats && !mentalStats) {
    return res.status(400).json({
      success: false,
      message: "Please provide at least one of emotionalStats, physicalStats, or mentalStats"
    });
  }

  // Merge updates into current stats
  if (emotionalStats) {
    stats.emotionalStats = { ...stats.emotionalStats, ...emotionalStats };
  }

  if (physicalStats) {
    stats.physicalStats = { ...stats.physicalStats, ...physicalStats };
  }

  if (mentalStats) {
    stats.mentalStats = { ...stats.mentalStats, ...mentalStats };
  }

  return res.status(200).json({
    success: true,
    message: "Player stats updated successfully",
    updatedStats: stats
  });
});

// Replace all stats with a new object
router.put('/', (req, res) => {
  const { emotionalStats, physicalStats, mentalStats } = req.body;

  if (!emotionalStats || !physicalStats || !mentalStats) {
    return res.status(400).json({
      success: false,
      message: "All stat categories (emotionalStats, physicalStats, mentalStats) are required"
    });
  }

  // Full overwrite
  stats.emotionalStats = emotionalStats;
  stats.physicalStats = physicalStats;
  stats.mentalStats = mentalStats;

  return res.status(200).json({
    success: true,
    message: "All stats replaced successfully",
    stats
  });
});

const PlayerStats = require('../models/PlayerStats');

router.post('/add', async (req, res) => {
  try {
    const newPlayer = new PlayerStats(req.body);
    await newPlayer.save();
    res.status(201).json({ success: true, message: "Player stats saved", player: newPlayer });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving stats", error: err.message });
  }
});
router.get('/all', async (req, res) => {
  try {
    const players = await PlayerStats.find();
    res.status(200).json({ success: true, players });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching stats", error: err.message });
  }
});




module.exports = router;
