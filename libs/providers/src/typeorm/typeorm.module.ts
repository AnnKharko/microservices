import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSorce } from './typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(appDataSorce.options)],
})
export class TypeormModule {}
