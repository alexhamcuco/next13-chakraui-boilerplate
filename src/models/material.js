import mongoose, { Schema } from "mongoose";
const materialSchema = new Schema(
  { nivel:String,
    palabrasClave: String,
    privilegios: Boolean ,
     tipo: String,
     titulo: String,
     url: String,
     urlTitulo: String } 
);
const Material =
  mongoose.models.Material || mongoose.model("Material", materialSchema);
export default Material;
