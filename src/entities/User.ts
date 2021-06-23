import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Table, UpdateDateColumn} from "typeorm";
import {v4 as uuid } from "uuid"; 

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export {User};
