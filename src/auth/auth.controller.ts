import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Endpoint for user login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: { user: Omit<User, 'password'> }) {
    // The LocalAuthGuard has already validated the user and attached it to the request
    return this.authService.login(req.user);
  }
}
