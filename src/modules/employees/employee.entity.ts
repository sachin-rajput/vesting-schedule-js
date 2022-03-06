import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EquityAward } from '../equityaward/equityaward.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: string;

  @Column()
  name: string;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updateTime: Date;

  @OneToMany((type) => EquityAward, (equityAward) => equityAward.employee, {
    primary: true,
    cascade: ['insert'],
  })
  awards: EquityAward[];
}
