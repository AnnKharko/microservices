import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { PostEntity } from './../../../entities/src/post.entity';

config({ path: join(process.cwd(), '.env') });
const configService = new ConfigService();
const options = (): DataSourceOptions => {
  const url = configService.get('DATABASE_URL');

  if (!url) {
    throw new Error('Data base url is empty');
  }

  return {
    url,
    type: 'postgres',
    schema: 'public',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    name: configService.get('POSTGRES_DB'),
    logging: !configService.get<boolean>('IS_PROD'),
    synchronize: false,
    entities: [PostEntity],
    migrations: [
      join(
        process.cwd(),
        'libs',
        'providers',
        'src',
        'typeorm',
        'migrations',
        '**/*{.ts,.js}',
      ),
    ],
    migrationsRun: true,
    migrationsTableName: 'migrations',
  };
};

console.log('options()==', options());

export const appDataSorce = new DataSource(options());
