import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from './car.model';

@Module({
    imports: [SequelizeModule.forFeature([Car])]
})
export class CarsModule {}
