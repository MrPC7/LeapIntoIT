const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth.verifyToken, role.isAdmin);

router.get('/users', adminController.getAllUsers);
router.put('/courses/:id/approve', adminController.approveCourse);

module.exports = router;
