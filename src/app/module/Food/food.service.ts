/* eslint-disable @typescript-eslint/no-explicit-any */
import { sentImageToCloudinary } from "../../utils/sentImageToCloudinary";
import { TFood } from "./food.interface";
import { Food } from "./food.model";

const createFoodIntoDb = async (payload: TFood, file: any) => {
  // demo rating or default rating
  payload.rating = 5;

  if (file) {
    const imageName = `${payload.category}${payload.name}`;
    const path = file?.path;
    // sent image to cloudinary
    const image = await sentImageToCloudinary(imageName, path);
    payload.image = image.secure_url;
  }

  const result = await Food.create(payload);
  return result;
};

const getAllFoodFronDb = async (query: Record<string, unknown>) => {
  const result = await Food.find(query);
  return result;
};

export const FoodService = {
  createFoodIntoDb,
  getAllFoodFronDb,
};
