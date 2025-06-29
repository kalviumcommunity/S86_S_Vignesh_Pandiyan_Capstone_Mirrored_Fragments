const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  emotionalStats: {
    confidence: Number,
    anxiety: Number,
    focus: Number,
    willpower: Number
  },
  physicalStats: {
    strength: Number,
    stamina: Number,
    agility: Number
  },
  mentalStats: {
    mentalStrength: Number,
    memory: Number
  }
});

module.exports = mongoose.model('Stats', statsSchema);
