import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Type from "./types";

@Entity("tests")
export default class Tests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  subjectId: number;

  @Column()
  professorId: number;

  @Column()
  typeId: number;

  @Column()
  url: string;

  @ManyToOne(() => Type, type => type.tests)
  type: Type;
}