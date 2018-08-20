const mongoose = require('mongoose');

const ConversacionSchema = new mongoose.Schema({
  messages: [{
    _id: false,
    id: mongoose.Schema.Types.ObjectId,
    message: String,
  }],
});

mongoose.model('Conversacion', ConversacionSchema);
