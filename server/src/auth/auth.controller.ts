import { Controller, Post, Get, Body, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    console.log('SIGNUP')
    return this.authService.signup(dto)
  }

  @Post('signin')
  signin(@Body() dto: AuthDto, @Req() req: any, @Res() res: any) {

    console.log('SIGNIN  dto = ', dto)
    return this.authService.signin(dto, req, res)
  }

  @Get('signout')
  signout(@Req() req: any, @Res() res: any) {
    console.log('SIGNOUT')
    return this.authService.signout(req, res)
  }
}