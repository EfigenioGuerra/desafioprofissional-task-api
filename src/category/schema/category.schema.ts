import { model, Schema } from "mongoose";
import colors from "../enum/colors.enum";

const categorySchema = new Schema({
    nomeCategoria: String,
    cor: {type: String, colors}
}, {timestamps: true});

export default model("Categoty", categorySchema)