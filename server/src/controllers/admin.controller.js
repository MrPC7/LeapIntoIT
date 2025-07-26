const User = require('../models/user.model');
const Course = require('../models/course.model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-passwordHash');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
};

exports.approveCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { status: 'published' },
      { new: true }
    );
    res.json({ message: 'Course approved', course });
  } catch (err) {
    res.status(500).json({ message: 'Failed to approve course', error: err.message });
  }
};
