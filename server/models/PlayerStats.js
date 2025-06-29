
const mongoose = require('mongoose');

const playerStatsSchema = new mongoose.Schema({
  emotionalStats: {
    confidence: { type: Number, required: true },
    anxiety: { type: Number, required: true },
    focus: { type: Number, required: true },
    willpower: { type: Number, required: true }
  },
  physicalStats: {
    strength: { type: Number, required: true },
    stamina: { type: Number, required: true },
    agility: { type: Number, required: true }
  },
  mentalStats: {
    mentalStrength: { type: Number, required: true },
    memory: { type: Number, required: true }
  }
});

const PlayerStats = mongoose.model('PlayerStats', playerStatsSchema);

module.exports = PlayerStats;
