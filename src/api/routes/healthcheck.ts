import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.get('/healthcheck', async (_req: Request, res: Response, _next: NextFunction) => {
  // todo: checking external dependencies

  try {
    res.send("healthy");
    res.status(200).send();
  }
  catch (err) {
    res.send("unhealthy");
    res.status(503).send();
  }
});

export default router;
