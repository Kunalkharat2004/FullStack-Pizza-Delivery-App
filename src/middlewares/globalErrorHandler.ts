/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import logger from "../config/logger";

// eslint-disable-next-line no-unused-vars
const globalErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    logger.error(err.message);

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                message: err.message,
                // path: req.originalUrl,
                method: req.method,
            },
        ],
    });
};

export default globalErrorHandler;
