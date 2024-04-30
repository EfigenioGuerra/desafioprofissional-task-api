import categoryModel from "../schema/category.schema"
import { CategoryType } from "../types/category.type";
import { deflate } from "zlib";

class CategoryService {
    async create(category: CategoryType) {
        const createdCategory = await categoryModel.create(category)
        return createdCategory
    }

    async findAll() {
        const findedCategory = await categoryModel.find()
        return findedCategory
    }

    async findById(id: string) {
        const findedCategory = await categoryModel.findById(id)
        return findedCategory
    }

    async update(id: string, category: CategoryType) {
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, {
            nomeCategoria: category.nomeCategoria,
            cor: category.cor
        }, { new: true })
        return updatedCategory
    }

    async delete(id: string) {
        try {
            await categoryModel.findByIdAndDelete(id)
            return "Categoria removida"
        } catch (error) {
            throw new Error(`Erro ao remover Categoria: ${error}`)
        }
    }
}

export default new CategoryService()