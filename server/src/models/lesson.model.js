const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  contentType: { type: String, enum: ['video', 'pdf', 'article'], required: true },
  contentUrl: { type: String, required: true },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Lesson', lessonSchema);
