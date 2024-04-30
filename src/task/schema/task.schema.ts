import { model, Schema } from "mongoose";
import statusTask from "../enum/status.enum";

const taskSchema = new Schema({
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    status: {type: String, statusTask},
    usuarioID: {type: String, required: true}
}, {timestamps: true});

export default model("Task", taskSchema)