const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  id1: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id2: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  state: { type: String, enum: ['dislike', 'like', 'match'] },
});

mongoose.model('Match', MatchSchema);
