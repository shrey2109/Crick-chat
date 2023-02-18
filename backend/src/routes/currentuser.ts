import { currentUser } from '../common';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/users/currentuser', currentUser,(req: Request, res: Response) => {
  console.log('here')
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
