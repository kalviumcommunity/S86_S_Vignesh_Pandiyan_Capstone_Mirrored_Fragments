const express = require('express');
const Player = require('../models/Player');
const Stats = require('../models/Stats');
const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const newStats = new Stats(req.body.stats);
    const savedStats = await newStats.save();

    const newPlayer = new Player({
      username: req.body.username,
      stats: savedStats._id
    });

    const savedPlayer = await newPlayer.save();

    res.status(201).json({ player: savedPlayer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
