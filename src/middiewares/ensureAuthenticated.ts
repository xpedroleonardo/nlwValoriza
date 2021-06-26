import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  const [, token] = authToken.split(" ");

  if (!token) {
    return response.status(401).end();
  }

  try {
    const { sub } = verify(token, "ffhanku-dfjnasdk") as IPayLoad;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).end();
  }
}
