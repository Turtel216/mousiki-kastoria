import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

// General dynamic information of the team
@Entity('info')
export class Info {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  coordinator: string;

  @Column()
  vice_coordinator: string;
}
