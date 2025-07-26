const Quiz = require('../models/quiz.model');

exports.createQuiz = async (quizData) => {
  return await Quiz.create(quizData);
};

exports.getQuizByCourse = async (courseId) => {
  return await Quiz.findOne({ course: courseId });
};
