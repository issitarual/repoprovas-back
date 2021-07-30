import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import Semester from "./semester";

@Entity("subject")
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Semester, semester => semester.subject)
    semester: Subject;
}