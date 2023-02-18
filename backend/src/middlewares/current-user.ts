import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// middleware to define the current user property on request object which will store userId and email

interface UserPayLoad {
  id: string;
  email: string;
}

// adds current user property to request object
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayLoad;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // if jwt property is not set on session object then return early without setting the current user property
  console.log(req.session?.jwt);
  if (!req.session?.jwt) {
    return next();
  }
  // else get the payload from the jwt and set it as current user property
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayLoad;
    req.currentUser = payload;
  } catch (error) {}
  next();
};
