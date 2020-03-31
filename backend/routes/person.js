import express from 'express';
import { login, signUp } from '../controllers/personnController';
let personRouter = express.Router();

personRouter.post('/', signUp);
personRouter.post('/', login);

export default personRouter;
