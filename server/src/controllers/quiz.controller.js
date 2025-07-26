const Quiz = require('../models/quiz.model');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ message: 'Quiz creation failed', error: err.message });
  }
};

exports.getQuizByCourse = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ course: req.params.courseId });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: 'Quiz fetch failed', error: err.message });
  }
};
