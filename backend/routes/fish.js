import express from 'express';
import { addFish, getAllFish, removeFish, updateFish } from '../controllers/fishController';
import ensureIsAuthentificated from '../helpers/authentificationGuard';
let fishRouter = express.Router();

fishRouter.get('/', getAllFish);
fishRouter.post('/', ensureIsAuthentificated, addFish);
fishRouter.delete('/:id', ensureIsAuthentificated, removeFish);
fishRouter.put('/:id', ensureIsAuthentificated, updateFish);

export default fishRouter;
