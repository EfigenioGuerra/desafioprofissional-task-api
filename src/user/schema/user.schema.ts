import { model, Schema } from "mongoose";

const userSchema = new Schema({
    nomeUsuario: String,
    peso: Number,
    senha: String,
    email: String
}, {timestamps: true});

export default model("User", userSchema)