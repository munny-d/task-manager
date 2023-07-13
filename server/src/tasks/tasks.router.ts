import {
  createValidator,
  updateValidator,
} from './tasks.validator';
import { Router } from 'express';
import { tasksController } from './tasks.controller';

// Fire the router function
export const tasksRouter: Router = Router();

// Create a default route
tasksRouter.get('/tasks', tasksController.getAll);

tasksRouter.post(
  '/tasks',
  createValidator,
  tasksController.create,
);

tasksRouter.put(
  '/tasks',
  updateValidator,
  tasksController.update,
);
