import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { jwtSecret } from '../utils/constants'
import { Request, Response } from 'express'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup(dto: AuthDto) {
    const { username, password } = dto;

    const foundUser = await this.prisma.user.findUnique({where: {username}})

    
    if (foundUser) {
        throw new BadRequestException('Username already exists')
    }
    
    const hashedPassword = await this.hashPassword(password)

    await this.prisma.user.create({ 
        data: {
            username,
            hashedPassword
        }
    })

    return { message: 'Signup was successfull' };
  }

  async signin(dto: AuthDto, req: Request, res: Response) {
    const { username, password } = dto

    const foundUser = await this.prisma.user.findUnique({where: {username}})

    
    if (!foundUser) {
        throw new BadRequestException('Wrong credentials provided')
    }

    const isMatch = await this.comparePassword({
        password, 
        hash: foundUser.hashedPassword
    })

    if (!isMatch) {
        throw new BadRequestException('Wrong credentials')
    }

    // Sign jwt and return to the user
    const token = await this.signToken({ 
        id: foundUser.id, 
        username: foundUser.username 
    })

    if (!token) {
        throw new ForbiddenException()
    }

    res.cookie('token', token)

    return res.send({ message: 'Logged In Successfully' });
  }

  async signout(req: Request, res: Response) {
    res.clearCookie('token')

    return res.send({ message: 'Logged Out Successfully' });
  }

  async hashPassword(password: string) {
    const saltOrRounds = 10;

    return await bcrypt.hash(password, saltOrRounds)
  }

  async comparePassword(args: {password: string, hash: string}) {
    return await bcrypt.compare(args.password, args.hash)
  }

  async signToken(args: { id: string, username: string }) {
    const payload = args

    return this.jwt.signAsync(payload, { secret: jwtSecret })
  }
}
