const Lesson = require('../models/lesson.model');

exports.addLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json(lesson);
  } catch (err) {
    res.status(500).json({ message: 'Lesson creation failed', error: err.message });
  }
};

exports.getLessonsByCourse = async (req, res) => {
  try {
    const lessons = await Lesson.find({ course: req.params.courseId }).sort('order');
    res.json(lessons);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching lessons', error: err.message });
  }
};
