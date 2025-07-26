const User = require('../models/user.model');

exports.getUserProfile = async (userId) => {
  return await User.findById(userId).select('-passwordHash');
};

exports.updateUserProfile = async (userId, { name, avatar }) => {
  return await User.findByIdAndUpdate(
    userId,
    { name, avatar },
    { new: true }
  ).select('-passwordHash');
};

exports.getAllUsers = async () => {
  return await User.find().select('-passwordHash');
};
