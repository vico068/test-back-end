import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'befective',
  password: 'befective',
  database: 'befective',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
