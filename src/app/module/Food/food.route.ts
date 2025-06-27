import express, { NextFunction, Request, Response } from "express";
import { FoodController } from "./food.controller";
import { upload } from "../../utils/sentImageToCloudinary";

const router = express.Router();

router.post(
  "/create-food",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  FoodController.createFood
);
router.get("/", FoodController.getAllFood);

export const FoodRoute = router;
