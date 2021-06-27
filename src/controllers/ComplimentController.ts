import { Request, Response } from "express";
import { ComplimentService } from "../services/ComplimentService";

class ComplimentController {
  async handleCreate(request: Request, response: Response) {
    
    const { tag_id, user_receiver, user_sender, message } = request.body;
    const service = new ComplimentService();

    const compliment = await service.executeCreate({ tag_id, user_receiver, user_sender, message });
    return response.json(compliment);
  }
}

export { ComplimentController }