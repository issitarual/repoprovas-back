import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}