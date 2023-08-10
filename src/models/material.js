import mongoose, { Schema } from "mongoose";
const materialSchema = new Schema(
  { title: String, description: String },
  { timestamps: true }
);
const Material =
  mongoose.models.Material || mongoose.model("Material", materialSchema);
export default Material;
