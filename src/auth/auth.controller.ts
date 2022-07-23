import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { LoginDTO } from 'src/dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly auth: AuthService, 
        private readonly user: UsersService
    ){}

    @Post('login')
    public async login(@Body() dto: LoginDTO, @Res({ passthrough: true }) res: Response) {
        const token = await this.auth.login(dto)
        res.cookie('jwt_token', token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return {
            "Success": true
        }
    }

    @Post('register')
    public async register(@Body() dto: Prisma.UserCreateInput) {
        return this.user.create(dto)
    }

    @UseGuards(AuthGuard("jwt"))
    @Post('logout')
    public async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        res.cookie("jwt_token", req.cookies["jwt_token"], {
            expires: new Date(Date.now()),
            sameSite: "none",
            secure: true
        })
        return {
            ...req.cookies
        }
    }

}
