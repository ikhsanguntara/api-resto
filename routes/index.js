import express from "express";
import { getUsers, getById, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getFoodId, getFoods, postFoods } from '../controllers/Foods.js';
import { getTransactions, postTransactions } from "../controllers/Transactions.js";

const router = express.Router();
//transactions
router.get('/transactions', verifyToken, getTransactions);
router.post('/transactions', verifyToken, postTransactions);
//food
router.get('/foods', verifyToken, getFoods);
router.post('/foods', verifyToken, postFoods);
router.get('/foods/:id', verifyToken, getFoodId);
//user
router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getById);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);



export default router;