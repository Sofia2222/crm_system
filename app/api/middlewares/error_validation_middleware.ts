import {Request, Response, NextFunction} from "express";
import { validationResult } from 'express-validator';

export const error_validation_middleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result = validationResult(req);
    if (result.isEmpty())
    {
        next();
    }else{
        res.status(400).json(result);
    }
}
