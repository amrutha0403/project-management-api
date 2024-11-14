/*
// src/auth/dto/login-auth.dto.ts

import { IsString } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  readonly username: string;

  @IsString()
  readonly password: string;
}
*/


import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
