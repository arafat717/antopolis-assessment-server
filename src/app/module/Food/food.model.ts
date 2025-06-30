import { model, Schema } from "mongoose";
import { TFood } from "./food.interface";

const foodSchema = new Schema<TFood>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
});

export const Food = model<TFood>("Food", foodSchema);
