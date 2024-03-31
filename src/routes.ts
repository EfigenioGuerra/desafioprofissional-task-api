import { Router } from "express";
import userController from "./user/controllers/user.controllers";

const routes = Router()

routes.post('/users', userController.create)
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.findById)
routes.put('/users/:id', userController.uptade)
routes.delete('/users/:id', userController.delete)


export {
    routes
}