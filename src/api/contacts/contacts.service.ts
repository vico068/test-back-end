import { ContactRepository } from './contacts.repository';
import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class ContactsService {
  constructor(private readonly contactRepository: ContactRepository) {}

  async paginate(options: IPaginationOptions): Promise<Pagination<Contact>> {
    const queryBuilder = this.contactRepository.createQueryBuilder('c');
    queryBuilder.orderBy('c.full_name', 'DESC');
    return paginate<Contact>(queryBuilder, options);
  }

  async findAll() {
    return this.contactRepository.findAllContact();
  }

  async findOne(id: string) {
    return this.contactRepository.findOneContact(id);
  }

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    return this.contactRepository.createContact(createContactDto);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    return this.contactRepository.updateContact(id, updateContactDto);
  }

  async remove(id: string) {
    return this.contactRepository.removeContact(id);
  }
}
