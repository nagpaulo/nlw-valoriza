import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean; 
}

class UserService {
  async executeCreate({ name, email, admin }: IUserRequest) {
    const repository = getCustomRepository(UserRepository);
    const userAlreadyExists = await repository.findOne({email});
    const user = repository.create({ name, email, admin });

    if(!email) { throw new Error("Email incorrect!"); }
    if(userAlreadyExists) { throw new Error("User already exists!"); }

    await repository.save(user);
    return user;
  }
}

export { UserService };