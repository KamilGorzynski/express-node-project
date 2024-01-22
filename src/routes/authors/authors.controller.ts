import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

router.get(
    '/authors',
    async (req: Request, res: Response, next: NextFunction) => {
     return res.json({
        "authors": [
            {"asd": "asd"},
            {"asd2": "asd2"},
        ]
     }) 
    },
  );

  export default router;