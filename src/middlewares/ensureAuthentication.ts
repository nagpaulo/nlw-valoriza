import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload { sub: string }

export function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;
  const [strBearer,token] = authToken.split(" ");

  if(!authToken) { return response.status(401).end(); }
  try {
    const { sub } = verify(token,"e8f47832e8dd5bead67d89fb4c68e107") as IPayload;
    request.user_id = sub;
  } catch (error) {
    return response.status(401).end();
  }

  return next();  
}