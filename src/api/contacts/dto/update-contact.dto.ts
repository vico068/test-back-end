import { Contact } from './../entities/contact.entity';
import { IsNotEmpty, IsPhoneNumber, IsOptional } from 'class-validator';

export class UpdateContactDto extends Contact {
  @IsNotEmpty({
    message: 'Informe um nome',
  })
  full_name: string;

  @IsOptional()
  @IsPhoneNumber('BR', {
    message: 'Informe um numero de telefone valido',
  })
  phone: string;
}
