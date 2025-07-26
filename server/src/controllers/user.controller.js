const User = require('../models/user.model');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, avatar } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, avatar },
      { new: true }
    ).select('-passwordHash');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile', error: err.message });
  }
};
