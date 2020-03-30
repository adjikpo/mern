import express from 'express';
import { add, getAll, getById, remove, update } from '../controllers/playerController';
let playerRouter = express.Router();

playerRouter.post('/', add);
playerRouter.get('/', getAll);
playerRouter.get('/:id', getById);
playerRouter.put('/:id', update);
playerRouter.delete('/:id', remove);

export default playerRouter;
