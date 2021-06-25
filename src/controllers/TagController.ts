import { Request, Response } from "express";
import { TagService } from "../services/TagService";

class TagController {
  async handleCreate(request: Request, response: Response) {
    const { name } = request.body;
    const service = new TagService();
    const tag = await service.executeCreate(name);
    return response.json(tag);
  }
}

export { TagController }