import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"; 

@Entity("tags")
class Tag {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly code_id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.code_id) {
      this.code_id = uuid();
    }
  }
}

export { Tag }