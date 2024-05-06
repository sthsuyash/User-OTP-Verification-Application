import { Request, Response, NextFunction } from "express";
import ApiResponse from "../utils/response";

export const inputValidation = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { code } = req.body;
        if (!code) {
            return res
                .status(400)
                .json(ApiResponse.error("Please enter a number."));
        }
        if (isNaN(code)) {
            return res
                .status(400)
                .json(ApiResponse.error("Code must be a number."));
        }
        next();
    } catch (err: any) {
        console.error('Error in input validation middleware:', err);
        return res
            .status(500)
            .json(ApiResponse.error(err.message));
    }
}
