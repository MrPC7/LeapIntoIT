const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quiz.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.post(
  '/',
  auth.verifyToken,
  role.isInstructor,
  quizController.createQuiz
);

router.get('/:courseId', quizController.getQuizByCourse);

module.exports = router;
