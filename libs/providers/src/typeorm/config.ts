import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';

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
    logging: !configService.get<boolean>('IS_PROD'),
    entities: [],
    migrations: [join(process.cwd(), 'migrations', '**', '*migrations.ts')],
    migrationsRun: true,
    migrationsTableName: 'migrations',
  };
};
export const appDataSorce = new DataSource(options());
