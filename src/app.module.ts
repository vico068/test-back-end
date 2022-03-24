import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { ContactsModule } from './api/contacts/contacts.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ContactsModule],
})
export class AppModule {}
