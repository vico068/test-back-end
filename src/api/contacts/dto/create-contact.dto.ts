import { Contact } from './../entities/contact.entity';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto extends Contact {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Informe um nome',
  })
  full_name: string;

  @ApiProperty()
  @IsPhoneNumber('BR', {
    message: 'Informe um numero de telefone valido',
  })
  phone: string;
}
