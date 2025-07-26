const Lesson = require('../models/lesson.model');

exports.addLessonToCourse = async (lessonData) => {
  return await Lesson.create(lessonData);
};

exports.getLessonsForCourse = async (courseId) => {
  return await Lesson.find({ course: courseId }).sort('order');
};
