import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Image from "./Image";

@Entity("potholes")
export default class Pothole {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  description: string;


  @OneToMany(() => Image, (image) => image.pothole, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "pothole_id" })
  images: Image[];

}
