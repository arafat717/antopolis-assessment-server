import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchema = new Schema<TCategory>({
  category: { type: String, required: true },
});

export const Category = model<TCategory>("Category", categorySchema);
