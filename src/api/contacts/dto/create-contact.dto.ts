import { Contact } from './../entities/contact.entity';
import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateContactDto extends Contact {
  @IsNotEmpty({
    message: 'Informe um nome',
  })
  full_name: string;

  @IsPhoneNumber('BR', {
    message: 'Informe um numero de telefone valido',
  })
  phone: string;
}
