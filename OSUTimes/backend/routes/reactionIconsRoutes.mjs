import express from 'express';
import { deleteIconsRow, fetchIcons, fetchIconsColumns } from "../controllers/reactionIconsController.mjs";

const reactionIconsRouter = express.Router();

reactionIconsRouter.route('/').get(fetchIcons);
reactionIconsRouter.route('/:id').delete(deleteIconsRow);
reactionIconsRouter.route('/columns').get(fetchIconsColumns);

export default reactionIconsRouter;