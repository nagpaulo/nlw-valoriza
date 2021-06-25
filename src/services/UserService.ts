import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { IUserRequest } from "../entities/vo/IUserRequest";
import { UserRepository } from "../repositories/UserRepository";

class UserService {
  async executeCreate({ name, email, admin = false, password }: IUserRequest) {
    const repository = getCustomRepository(UserRepository);
    const userAlreadyExists = await repository.findOne({email});
    const passwordHash = await hash(password,8);
    const user = repository.create({ name, email, admin, password: passwordHash });

    if(!email) { throw new Error("Email incorrect!"); }
    if(userAlreadyExists) { throw new Error("User already exists!"); }

    await repository.save(user);
    return user;
  }
}

export { UserService };