import express from 'express';
import userController from '../controllers/UserController';
import userInputValidator from '../validators/UserInputValidator';
const router = express.Router({});

router.post('/track/trackValue', userInputValidator.validateUserInput, userController.trackValue);
router.get('/track/getHistory', userController.getHistory);

module.exports = router;
