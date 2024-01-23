import { NextFunction, Request, Response, Router } from 'express';
import AuthorModel from "./authors.model"

const router = Router();

router.get(
    '/authors',
    async (req: Request, res: Response) => {
    const documents = await AuthorModel.find();
    return res.json(documents);
    },
  );

router.post('/create_author', async (req: Request, res: Response) => {
try {
    const newAuthor = new AuthorModel({...req.body});

    await newAuthor.save();

    res.status(201).json({ message: 'Author created successfully' });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
}
});

  export default router;