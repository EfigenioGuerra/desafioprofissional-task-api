import statusTask from "../enum/status.enum";
import taskModel from "../schema/task.schema"
import { TaskType } from "../types/task.type";
import { deflate } from "zlib";

class TaskService{
    async create(category: TaskType){
        const createdTask = await taskModel.create(category)
        return createdTask
    }

    async findAll(){
        const findedTasks = await taskModel.find()
        return findedTasks
    }

    async findById(id: string){
        const findedTasks = await taskModel.findById(id)
        return findedTasks
    }

    async update(id: string, task: TaskType) {
        const updatedTasks = await taskModel.findByIdAndUpdate(id, {
            titulo: task.titulo,
            descricao: task.descricao,
            dataCriacao: task.dataCriacao,
            dataConclusao: task.dataConclusao,
            tipo: task.tipo,
            status: task.status,
            usuarioID: task.usuarioID
        }, {new: true})
        return updatedTasks
    }

    async delete(id: string){
        try {
            await taskModel.findByIdAndDelete(id)
            return "Categoria removida"
        } catch (error) {
            throw new Error(`Erro ao remover Categoria: ${error}`)
        }
    }

    async findUserById(id: string) {
        return await taskModel.find({ usuarioID: id })
    }

    async findPending() {
        return await taskModel.find({ status: 'Pending' })
    }

    async findInProgress() {
        return await taskModel.find({ status: 'Progress' })
    }

    async findCompleted() {
        return await taskModel.find({ status: 'Completed' })
    }
}

export default new TaskService()