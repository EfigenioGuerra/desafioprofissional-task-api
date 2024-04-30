import { Request, Response } from "express";
import categoryService from "../services/category.service";
import { deleteModel } from "mongoose";

class CategoryController {
    async create(req: Request, res: Response){
        const createdCategory = await categoryService.create(req.body)
        res.status(201)
        return res.json(createdCategory)
    }

    async findAll(req: Request, res: Response){
        const findedCategory = await categoryService.findAll()
        return res.json(findedCategory)
    }

    async findById(req: Request, res: Response){
        const findedCategory = await categoryService.findById(req.params.id)
        return res.json(findedCategory)
    }

    async uptade(req: Request, res: Response){
        const updatedCategory = await categoryService.update(req.params.id,req.body)
        return res.json(updatedCategory)
    }

    async delete(req: Request, res: Response){
        const deleteMassage = await categoryService.delete(req.params.id)
        return res.json(deleteMassage)
    }
}

export default new CategoryController()
