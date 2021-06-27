import { Request, Response } from "express";
import { AuthenticationUserService } from "../services/AuthenticationUserService";

class AuthenticationController {
  async handleAuthentication(request: Request, response: Response) {
    const {email, password} = request.body;
    const service = new AuthenticationUserService();
    const token = await service.execute({ email,password });

    return response.json(token);
  }
}

export { AuthenticationController }