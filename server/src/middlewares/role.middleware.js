exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ message: 'Admin access only' });
  next();
};

exports.isInstructor = (req, res, next) => {
  if (req.user.role !== 'instructor')
    return res.status(403).json({ message: 'Instructor access only' });
  next();
};

exports.isStudent = (req, res, next) => {
  if (req.user.role !== 'student')
    return res.status(403).json({ message: 'Student access only' });
  next();
};
