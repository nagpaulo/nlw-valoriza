import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository()
class UserRepository extends Repository<User> {
  
}

export { UserRepository };