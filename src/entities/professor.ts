import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Tests from "./test";

@Entity("professor")
export default class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subjectId: number;

  @OneToMany(() => Tests, test => test.professor)
  tests: Tests[];
}