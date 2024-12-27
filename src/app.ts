import "reflect-metadata";
import express, { Request, Response } from "express";
import authRoute from "./routes/authRoute";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello SnowBell, This message is coming from the server",
    });
});

app.use("/auth", authRoute);

app.use(globalErrorHandler);

export default app;
