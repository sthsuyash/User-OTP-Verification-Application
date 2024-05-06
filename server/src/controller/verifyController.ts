import { Request, Response } from "express";
import ApiResponse from "../utils/response";
import { verifyCode } from "../services/verificationService";

/**
 * Verify the digits
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export const verifyController = async (req: Request, res: Response) => {
    try {
        const { code } = req.body;
        const result = await verifyCode(code);
        if (result.error) {
            return res.status(400).json(ApiResponse.error(result.message));
        }
        res.status(200).json(ApiResponse.success(null, "Code verified successfully."));
    } catch (error: any) {
        res.status(400).json(ApiResponse.error(error.message));
    }
}
