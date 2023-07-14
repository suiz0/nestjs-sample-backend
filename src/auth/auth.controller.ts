import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Request as ReqDecorator,
  Get,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './skipAuth';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginData: Record<string, any>) {
    return this.authService.login(loginData.username, loginData.password);
  }

  @Get('profile')
  getProfile(@ReqDecorator() req: Request) {
    console.log(req);
  }
}
