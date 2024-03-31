import { Request, Response } from "express";
import userService from "../services/user.service";
import { deleteModel } from "mongoose";

class UserController {
    async create(req: Request, res: Response){
        const createdUser = await userService.create(req.body)
        res.status(201)
        return res.json(createdUser)
    }

    async findAll(req: Request, res: Response){
        const findedUsers = await userService.findAll()
        return res.json(findedUsers)
    }
 
    async findById(req: Request, res: Response){
        const findedUsers = await userService.findById(req.params.id)
        return res.json(findedUsers)
    }

    async uptade(req: Request, res: Response){
        const updatedUser = await userService.update(req.params.id,req.body)
        return res.json(updatedUser)
    }

    async delete(req: Request, res: Response){
        const deleteMassage = await userService.delete(req.params.id)
        return res.json(deleteMassage)
    }
}

export default new UserController()
