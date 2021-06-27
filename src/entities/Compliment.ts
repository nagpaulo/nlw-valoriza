import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid"; 
import { Tag } from "./Tag";
import { User } from "./User";

@Entity("compliments")
class Compliment {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly code_id: string;

  @Column()
  user_sender: number;

  @ManyToOne(() => User)
  @JoinColumn({name: "user_sender"})
  userSender: User;
  
  @Column()
  user_receiver: number;

  @ManyToOne(() => User)
  @JoinColumn({name: "user_receiver"})
  userReceiver: User;

  @Column()
  tag_id: number;

  @ManyToOne(() => Tag)
  @JoinColumn({name: "tag_id"})
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.code_id) {
      this.code_id = uuid();
    }
  }
}

export { Compliment }