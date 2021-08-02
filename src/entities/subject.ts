import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import Semester from "./semester";
import Tests from "./test";

@Entity("subject")
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Semester, semester => semester.subject)
  semester: Subject;

  @OneToMany(() => Tests, test => test.subject)
  tests: Tests[];
}