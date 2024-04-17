import express from 'express';
import { signup } from '../Controllers/authcontroller.js';

const router  = express.Router();


router.post('/signup' , signup)

export default router