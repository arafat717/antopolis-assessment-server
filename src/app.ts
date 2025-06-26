import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { UserRoute } from "./app/module/User/user.route";

app.use(express.json());
app.use(cors());

// application route
app.use("/api", UserRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});

export default app;
