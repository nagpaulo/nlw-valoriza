import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Table, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"; 

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly code_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

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

export {User};
