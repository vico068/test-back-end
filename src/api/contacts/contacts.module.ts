
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContactRepository } from './contacts.repository';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';

@Module({
  controllers: [ContactsController],
  providers: [ContactsService],
  imports: [TypeOrmModule.forFeature([ContactRepository])],
})
export class ContactsModule {}
