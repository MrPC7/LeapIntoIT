const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fileUrl: String,
  submittedAt: Date,
  grade: Number,
  feedback: String
});

const assignmentSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  title: String,
  description: String,
  dueDate: Date,
  submissions: [submissionSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
