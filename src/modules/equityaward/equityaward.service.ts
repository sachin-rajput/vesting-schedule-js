import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EquityAward } from './equityaward.entity';

@Injectable()
export class EquityAwardService {
  constructor(
    @InjectRepository(EquityAward)
    private equityAwardRepository: Repository<EquityAward>,
  ) {}
}
