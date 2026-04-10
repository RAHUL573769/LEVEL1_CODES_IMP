import express from 'express';
import { create } from './../controller/user.controller.js';

const router = express.Router();

router.post('/', create.createUserController);

export const userRouter = router;