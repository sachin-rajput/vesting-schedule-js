import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquityAward } from './equityaward.entity';
import { EquityAwardService } from './equityaward.service';

@Module({
  imports: [TypeOrmModule.forFeature([EquityAward])],
  providers: [EquityAwardService],
})
export class EquityAwardModule {}
