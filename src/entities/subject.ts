import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import Semester from "./semester";

@Entity("subject")
export default class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Semester, Semester => Semester.subjectId)
  semester: Semester;
}