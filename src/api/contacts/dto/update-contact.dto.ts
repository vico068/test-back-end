import { Contact } from './../entities/contact.entity';
import { IsNotEmpty, IsPhoneNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateContactDto extends Contact {
  @ApiProperty()
  @IsNotEmpty({
    message: 'Informe um nome',
  })
  full_name: string;

  @ApiProperty()
  @IsOptional()
  @IsPhoneNumber('BR', {
    message: 'Informe um numero de telefone valido',
  })
  phone: string;
}
