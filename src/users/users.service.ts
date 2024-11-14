// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'; // Import User interface

@Injectable()
export class UsersService {
  private users: User[] = []; // Mock user database

  findAll(): User[] {
    return this.users;  // This will return all users (replace with actual database query logic)
  }

  // Find user by email
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  // Create a new user
  create(user: User): User {
    this.users.push(user);
    return user;
  }
}
