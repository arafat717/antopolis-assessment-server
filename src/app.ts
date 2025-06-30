import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { CategoryRoute } from "./app/module/Category/category.route";
import { FoodRoute } from "./app/module/Food/food.route";

app.use(express.json());
app.use(
  cors({
    origin: "https://antopolis-resturant.vercel.app",
    credentials: true,
  })
);

// application route
app.use("/api/category", CategoryRoute);
app.use("/api/food", FoodRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

export default app;
