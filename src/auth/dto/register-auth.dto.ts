/*// src/auth/dto/register-auth.dto.ts

import { IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterAuthDto {
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(6)
  readonly password: string;
}
*/

import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class RegisterAuthDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
