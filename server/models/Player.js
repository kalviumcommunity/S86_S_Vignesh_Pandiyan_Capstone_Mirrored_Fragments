const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  stats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stats'
  }
});

module.exports = mongoose.model('Player', playerSchema);
