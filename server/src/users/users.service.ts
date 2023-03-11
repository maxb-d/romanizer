import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async getOneUser (id: string, req: Request) {
        const user = await this.prisma.user.findUnique({ where: {id}})

        if (!user) {
            throw new NotFoundException()
        }

        const decodedUser = req.user as {id: string, username: string}

        if (user.id !== decodedUser.id) {
            throw new ForbiddenException()
        }

        return { user }
    }

    async getUsers () {
        return await this.prisma.user.findMany({ select: {id: true, username: true}})
    }
}
