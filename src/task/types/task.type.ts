import statusTask from "../enum/status.enum"

export interface TaskType {
    titulo: String,
    descricao: String,
    dataCriacao: Date,
    dataConclusao: Date,
    tipo: String,
    status: {type: String, statusTask},
    usuarioID: {type: String, required: true},
}