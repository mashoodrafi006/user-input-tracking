import express from 'express';
import userController from '../controllers/userController';
const router = express.Router({});

router.post('/track/trackValue', userController.trackValue);
router.get('/track/getHistory', userController.getHistory);

module.exports = router;
