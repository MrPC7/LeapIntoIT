const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  certUrl: String,
  issuedAt: { type: Date, default: Date.now },
  certId: { type: String, unique: true }
});

module.exports = mongoose.model('Certificate', certificateSchema);
