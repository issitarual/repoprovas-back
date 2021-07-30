import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Subject from "./subject";

@Entity("semester")
export default class Semester {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semester: number;

  @Column()
  courseId: number;

  @Column()
  subjectId: number;

  @OneToMany(() => Subject, subject => subject.semester)
  subject: Subject[];
}