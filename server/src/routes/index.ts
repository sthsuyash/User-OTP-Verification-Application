import express from "express"
const router = express.Router()

import ApiResponse from "../utils/response"
import { verifyController } from "../controller/verifyController"
import { inputValidation } from "../middleware/inputValidation"

router.get("/", (req, res) => {
    res
        .status(200)
        .json(ApiResponse.success(null, "Welcome to Verification API v1.0."))
})

router.post("/verify", inputValidation, verifyController);

export default router
