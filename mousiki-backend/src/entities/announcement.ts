import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('announcement')
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  body: string;

  @Column()
  image: string;

  @Column()
  deleteDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}
