import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./subject";

@Entity("semester")
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semester: number;

  @Column()
  couserId: number;

  @Column()
  subjectId: number;

  @ManyToOne(() => Subject, (subject) => subject.semester)
  subject: Subject[];
}
