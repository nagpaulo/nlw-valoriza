import {Column, CreateDateColumn, Entity, PrimaryColumn, Table, UpdateDateColumn} from "typeorm";
import {v4 as uuid } from "uuid"; 

@Entity("users")
class User {
  @PrimaryColumn()
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

  constructor() {
    if(!this.id) {
      this.id = Number.parseFloat(uuid());
    }
  }
}

export {User};
