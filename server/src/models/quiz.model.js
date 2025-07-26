const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: String,
  options: [String],
  correctAnswer: Number
});

const quizSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: String,
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quiz', quizSchema);
