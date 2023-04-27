import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSorce } from './config';

@Module({
  imports: [TypeOrmModule.forRoot(appDataSorce.options)],
})
export class TypeormModule {}
