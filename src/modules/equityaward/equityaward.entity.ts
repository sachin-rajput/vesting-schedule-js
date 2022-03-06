import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Employee } from '../employees/employee.entity';

@Entity()
export class EquityAward {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  awardId: string;

  @Column()
  awardedDate: Date;

  @Column()
  quantity: number;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updateTime: Date;

  @OneToMany((type) => Employee, (employee) => employee.awards, {
    primary: true,
    cascade: ['insert'],
  })
  employee: Employee;
}
