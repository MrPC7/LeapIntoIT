const Course = require('../models/course.model');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({ ...req.body, instructor: req.user.id });
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Course creation failed', error: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({ status: 'published' }).populate('instructor', 'name');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch courses', error: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('instructor', 'name');
    res.json(course);
  } catch (err) {
    res.status(404).json({ message: 'Course not found', error: err.message });
  }
};
