import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("subject")
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}