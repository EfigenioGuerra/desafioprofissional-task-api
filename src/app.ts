import express  from "express"
import mongoose from "mongoose"
import { routes } from './routes'

class App {
    public express: express.Application

    constructor(){
        this.express = express()
        this.middleware()
        this.database()
        this.routes()
    }

    public middleware(){
        this.express.use(express.json())
    }

    public async database() {
        try {
            await mongoose.connect('mongodb://localhost:27017/task-api')
            console.log("Sucesso ao conectar com o banco de dados")
        } catch (error) {
            console.error("Não foi possivel conectar com o banco de dados:", error)
        }
    }

    public routes(){
        this.express.use(routes)
    }

}

export default new App().express