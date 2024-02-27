import { validationResult } from 'express-validator';

export const error_validation_middleware = (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty())
    {
        next();
    }else{
        res.status(400).json(result);
    }
}
