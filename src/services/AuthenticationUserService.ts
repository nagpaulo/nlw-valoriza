import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { IAuthenticationRequest } from "../entities/vo/IAuthenticationRequest";
import { UserRepository } from "../repositories/UserRepository";

class AuthenticationUserService {
  async execute({email, password}: IAuthenticationRequest) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({ email });
    const IsPasswordMatch:boolean = await compare(password, user.password);

    if(!user || !IsPasswordMatch) { throw new Error("Email/Password incorrect!"); }
    
    const token = sign(
      {
        email: user.email,
      }, 
        "e8f47832e8dd5bead67d89fb4c68e107",
      {
        subject: user.id.toString(),
        expiresIn: "1d"
      }
    );
    return token;
  }
}

export { AuthenticationUserService }