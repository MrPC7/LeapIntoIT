const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

router.post(
  '/',
  auth.verifyToken,
  role.isInstructor,
  courseController.createCourse
);

module.exports = router;
