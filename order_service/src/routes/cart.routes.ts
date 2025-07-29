import express, { NextFunction, Request, Response } from 'express'

const router = express.Router()

router.post("/cart", async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create cart"});
});

router.get("/cart", async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create cart"});
});

router.patch("/cart", async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create cart"});
});

router.delete("/cart", async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create cart"});
});

export default router;