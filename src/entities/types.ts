import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("type")
export default class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}