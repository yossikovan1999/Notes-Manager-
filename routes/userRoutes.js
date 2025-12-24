import express from 'express';

import { registerUser } from '../services/userService.js';

export const registerRouter = express.Router();

registerRouter.post ('/',registerUser)
