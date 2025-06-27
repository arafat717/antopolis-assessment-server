import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDb = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getAllCategoryIntoDb = async () => {
  const result = await Category.find();
  return result;
};

export const CategoryService = {
  createCategoryIntoDb,
  getAllCategoryIntoDb,
};
