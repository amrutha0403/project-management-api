// src/profile/profile.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';  // Import the AuthGuard from Passport

@Controller('profile')
export class ProfileController {
  
  @UseGuards(AuthGuard('jwt'))  // Apply AuthGuard to protect this route
  @Get()
  getProfile() {
    return { message: 'This is a protected route, only accessible with a valid JWT' };
  }
}
