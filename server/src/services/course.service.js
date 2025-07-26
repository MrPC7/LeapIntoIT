const Course = require('../models/course.model');

exports.createCourse = async (data, instructorId) => {
  return await Course.create({ ...data, instructor: instructorId });
};

exports.getAllPublishedCourses = async () => {
  return await Course.find({ status: 'published' }).populate('instructor', 'name');
};

exports.getCourseById = async (courseId) => {
  return await Course.findById(courseId).populate('instructor', 'name');
};

exports.approveCourse = async (courseId) => {
  return await Course.findByIdAndUpdate(courseId, { status: 'published' }, { new: true });
};
