import { getCustomRepository } from "typeorm";
import { IComplementRequest } from "../entities/vo/IComplementRequest";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

class ComplimentService {
  async executeCreate({ tag_id, user_receiver, user_sender, message }: IComplementRequest) {
    const repository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);
    const userReceiverExists = await userRepository.findOne(user_receiver);
    
    if(!userReceiverExists) { throw new Error("User receiver does not exists!") }
    if(user_receiver === user_sender) { throw new Error("Incorrect user receiver")}
    
    const compliment = repository.create({ tag_id, user_receiver, user_sender, message });
    
    await repository.save(compliment);
    return compliment;
  };
}

export { ComplimentService }