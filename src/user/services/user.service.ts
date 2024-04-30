import exp from "constants";
import userModel from "../schema/user.schema"
import { UserType } from "../types/user.type";
import { deflate } from "zlib";

class UserService{
    async create(user: UserType){
        const createdUser = await userModel.create(user)
        return createdUser
    }

    async findAll(){
        const findedUsers = await userModel.find()
        return findedUsers
    }

    async findById(id: string){
        const findedUsers = await userModel.findById(id)
        return findedUsers
    }

    async update(id: string, user: UserType) {
        const updatedUser = await userModel.findByIdAndUpdate(id, {
            nomeUsuario: user.nomeUsuario,
            peso: user.peso,
            senha: user.senha,
            email: user.email
        }, {new: true})
        return updatedUser
    }

    async delete(id: string){
        try {
            await userModel.findByIdAndDelete(id)
            return "Usuário removido"
        } catch (error) {
            throw new Error(`Erro ao remover Usuário: ${error}`)
        }
    }
}

export default new UserService()