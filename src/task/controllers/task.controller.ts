import { Request, Response } from "express";
import taskService from "../services/task.service";
import { deleteModel } from "mongoose";

class TaskController {
    async create(req: Request, res: Response){
        const createdTask = await taskService.create(req.body)
        res.status(201)
        return res.json(createdTask)
    }

    async findAll(req: Request, res: Response){
        const findedTask = await taskService.findAll()
        return res.json(findedTask)
    }

    async findById(req: Request, res: Response){
        const findedTask = await taskService.findById(req.params.id)
        return res.json(findedTask)
    }

    async uptade(req: Request, res: Response){
        const updatedTask = await taskService.update(req.params.id,req.body)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response){
        const deleteMassage = await taskService.delete(req.params.id)
        return res.json(deleteMassage)
    }


    async findUserById(req: Request, res: Response) {
        try {
            const usuarioTarefas = await taskService.findUserById(req.params.id)
            return res.status(200).json(usuarioTarefas)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findPending(req: Request, res: Response) {
        try {
            const tasksPending = await taskService.findPending()
            return res.status(200).json(tasksPending)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findInProgress(req: Request, res: Response) {
        try {
            const tasksInProgress = await taskService.findInProgress()
            return res.status(200).json(tasksInProgress)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findCompleted(req: Request, res: Response) {
        try {
            const tasksCompleted = await taskService.findCompleted()
            return res.status(200).json(tasksCompleted)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

}

export default new TaskController()
