import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("professor")
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subjectId: number;
}