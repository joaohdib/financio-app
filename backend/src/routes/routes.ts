import { Router } from 'express';
import userController from '../controllers/userController';
import paymentController from '../controllers/paymentController';

const router = Router();

router.post('/signup', userController.signUp);
router.post('/login', userController.login);

router.post('/payment', paymentController.addPayment);
router.get('/payment', paymentController.getPayment);

export default router;