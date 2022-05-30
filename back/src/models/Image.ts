import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Pothole from './Pothole'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string

  @Column()
  pothole_id: string

  @ManyToOne(() => Pothole, pothole => pothole.images)
  @JoinColumn({ name: 'pothole_id' })
  pothole: Pothole;
}