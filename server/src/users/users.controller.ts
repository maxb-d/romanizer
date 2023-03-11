import { Controller, Get, Param, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOneUser(@Param() params: {id: string}, @Req() req: any) {
    return this.usersService.getOneUser(params.id, req)
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers()
  }

}
