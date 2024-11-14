// src/users/users.controller.ts
/*
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';  // Import UserService

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}  // Inject UserService here
}
*/

// src/users/users.controller.ts
import { Controller, Get, Post, Body,UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';  // Importing UsersService
import { AuthGuard } from '@nestjs/passport';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}  // Injecting UsersService
  
  // Example route for creating a user
  @Post()
  async create(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  // Example route for getting users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('protected-endpoint')
  @UseGuards(AuthGuard('jwt'))  // Protect the route with JWT Guard
  
  getProtectedEndData() {
    return { message: 'Access granted to protected data' };
  }
}
