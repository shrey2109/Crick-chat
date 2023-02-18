import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

// a middleware to check if the user is logged in or not
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Assuming that the currentuser middleware is already called
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }
  next();
};
