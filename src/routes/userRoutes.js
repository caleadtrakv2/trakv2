const express = require('express');
const router = express.Router();

// Import controller
const userController = require('../Controllers/userController');

// Define routes
router.get('/issupplierexists/:contact', userController.getUsers);
router.get('/sendotp',userController.sendotp);
router.post('/verifyotp',userController.routeverifyotp);
// router.post('/saveotp',userController.saveotp);
// router.post('/', userController.createUser);

module.exports = router;
