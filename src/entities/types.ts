import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Tests from "./test";

@Entity("type")
export default class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Tests, (test) => test.type)
  tests: Tests[];
}
