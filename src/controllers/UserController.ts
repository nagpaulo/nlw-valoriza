import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController {
  async handleCreate(request: Request, response: Response){
    const { name, email, admin, password } = request.body;
    const service = new UserService();
    const user = await service.executeCreate({name, email, admin, password});

    return response.json(user);
  }
}

export { UserController };