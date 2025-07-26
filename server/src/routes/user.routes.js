const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');

router.get('/me', auth.verifyToken, userController.getProfile);
router.put('/me', auth.verifyToken, userController.updateProfile);

module.exports = router;
