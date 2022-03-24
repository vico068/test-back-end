import { Contact } from './entities/contact.entity';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Body,
  Param,
  ValidationPipe,
  DefaultValuePipe,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}
  @Get('paginate')
  async index(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<Contact>> {
    limit = limit > 100 ? 100 : limit;
    return this.contactsService.paginate({
      page,
      limit,
      route: 'http://127.0.0.1:3000/contacts/paginate',
    });
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Post()
  async create(
    @Body(ValidationPipe) createContactDto: CreateContactDto,
  ): Promise<Contact> {
    return this.contactsService.create(createContactDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
