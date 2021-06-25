import { getCustomRepository } from "typeorm"
import { TagRepository } from "../repositories/TagRepository";

class TagService {
  async executeCreate(name: string) {
    const repository = getCustomRepository(TagRepository);
    const tagAlreadyExists = await repository.findOne({ name });
    if(!name) {
      throw new Error("Incorrect name!");
    }

    if(tagAlreadyExists) {
      throw new Error("Tag already exists!");
    }

    const tag = repository.create({name});
    await repository.save(tag);

    return tag;
  }
}

export { TagService }