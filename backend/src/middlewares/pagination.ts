import { Request, Response, NextFunction } from 'express';
import { Model} from 'mongoose';
declare global {
  namespace Express {
    interface Response {
      paginatedResults?: {};
    }
  }
}

export function paginatedResults(model: Model<any>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    //@ts-ignore
    const page = parseInt(req.query.page);
    // @ts-ignore
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const result = await model.find().limit(limit).skip(startIndex).exec();
    let results: {
      next?: {};
      previous?: {};
      result: any[];
    };
    results = {
      next: {
        page: page + 1,
        limit: limit,
      },
      previous: {
        page: page - 1,
        limit: limit,
      },
      result: result,
    };
    if (startIndex == 0) {
      delete results.previous;
    }
    if (endIndex >await model.countDocuments().exec()) {
      delete results.next;
    }

    res.paginatedResults = results;
    next();
  };
}
