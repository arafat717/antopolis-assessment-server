/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { FoodService } from "./food.service";

const createFood = async (req: Request, res: Response) => {
  try {
    const result = await FoodService.createFoodIntoDb(req.body, req.file);
    res.status(200).json({
      success: true,
      message: "Food created successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

const getAllFood = async (req: Request, res: Response) => {
  try {
    const result = await FoodService.getAllFoodFronDb(req.query);
    res.status(200).json({
      success: true,
      message: "Food retrived successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
};

export const FoodController = {
  createFood,
  getAllFood,
};
