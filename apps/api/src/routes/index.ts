import type { Request, Response } from "express";
import { Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: "Welcome to the API",
    });
});

export default router;