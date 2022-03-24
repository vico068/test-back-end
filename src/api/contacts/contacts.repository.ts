import { Contact } from './entities/contact.entity';
import { BadRequestException } from '@nestjs/common';
import { EntityRepository, Repository, Equal, Not } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {
  async findAllContact(): Promise<Contact[]> {
    return this.find();
  }
  
  async findOneContact(id: string): Promise<Contact> {
    return this.findOne(id);
  }

  async createContact(createContactDto: CreateContactDto): Promise<Contact> {
    if (createContactDto.phone) {
      const existsContact = await this.findOne({
        where: { phone: Equal(createContactDto.phone) },
      });
      if (existsContact)
        throw new BadRequestException([
          `O telefone escolhido ja esta sendo usado por outro contato`,
        ]);
    }

    return await this.save(createContactDto);
  }

  async updateContact(
    id: string,
    updateContactDto: UpdateContactDto,
  ): Promise<Contact> {
    if (updateContactDto.phone) {
      const existsContact = await this.findOne({
        where: {
          phone: Equal(updateContactDto.phone),
          id: Not(id),
        },
      });

      if (existsContact)
        throw new BadRequestException(
          `O telefone escolhido ja esta sendo usado por outro contato`,
        );
    }

    await this.update(id, updateContactDto);
    return this.findOne(id);
  }

  async removeContact(id: string) {
    return this.softDelete(id);
  }
}
