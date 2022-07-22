import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly db: PrismaService) {}

    public async get(username: string): Promise<User> {
        return this.db.user.findUnique({ 
            where: {
                username,
            }
        })
    }

    public async create(dto: Prisma.UserCreateInput) {
        const user = await this.db.user.findUnique({ where: { username: dto.username } });
        if (user) throw new BadRequestException("Username ini telah digunakan")
        const {password, ...data} = dto;
        const _password = await hash(password, 10);
        return this.db.user.create({ data: {
            ...data,
            password: _password
        } })
    }

    public async validate(username: string, password: string): Promise<User> {
        const user = await this.db.user.findUnique({ where: { username } });
        if (!user) throw new UnauthorizedException("User dengan username ini tidak dapat ditemukan")
        if (user && await compare(password, user.password) ) {
            return user;
        }
        throw new UnauthorizedException("Username atau password yang dimasukan salah");
    }
}
