const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async ({ name, email, password, role }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('Email already in use');

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, passwordHash, role });
  return user;
};

exports.loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });

  return { token, user: { id: user._id, name: user.name, role: user.role } };
};
