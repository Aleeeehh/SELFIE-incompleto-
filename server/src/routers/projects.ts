import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (_: Request, res: Response) => {
	res.json({ message: "Hello from project router" });
});

export default router;
