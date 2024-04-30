import { Router } from "express";
import userController from "./user/controllers/user.controllers";
import categoryController from "./category/controllers/category.controller";
import taskController from "./task/controllers/task.controller";

const routes = Router()

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.findById)
routes.put('/users/:id', userController.uptade)
routes.delete('/users/:id', userController.delete)

routes.post('/categories', categoryController.create)
routes.get('/categories', categoryController.findAll)
routes.get('/categories/:id', categoryController.findById)
routes.put('/categories/:id', categoryController.uptade)
routes.delete('/categories/:id', categoryController.delete)

routes.post('/tasks', taskController.create)
routes.get('/tasks', taskController.findAll)
routes.get('/tasks/:id', taskController.findById)
routes.put('/tasks/:id', taskController.uptade)
routes.delete('/tasks/:id', taskController.delete)
routes.get('/findUsersTasks/:id', taskController.findUserById)
routes.get('/findPendingTasks', taskController.findPending)
routes.get('/findInProgressTasks', taskController.findInProgress)
routes.get('/findCompletedTasks', taskController.findCompleted)


export {
    routes
}