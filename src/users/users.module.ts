// src/users/users.module.ts

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; 
//import { UsersController } from './users.controller';

@Module({
  imports: [],
    controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService to be used in AuthService
})
export class UsersModule {}
