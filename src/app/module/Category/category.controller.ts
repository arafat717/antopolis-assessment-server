/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategoryIntoDb(req.body);
    res.status(200).json({
      success: true,
      message: "Category created successfully!",
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

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getAllCategoryIntoDb();
    res.status(200).json({
      success: true,
      message: "Category retrived successfully!",
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

export const CategoryController = {
  createCategory,
  getAllCategory,
};
