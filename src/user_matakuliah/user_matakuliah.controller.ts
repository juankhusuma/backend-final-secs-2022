import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserMatakuliahService } from './user_matakuliah.service';

@Controller('user-matakuliah')
export class UserMatakuliahController {
    constructor(private userMatkulServ: UserMatakuliahService) {}

    @UseGuards(AuthGuard("jwt"))
    @Get()
    findProfileMatkul(@Req() req: Request) {
        return this.userMatkulServ.userMatkul(req.user)
    }

    @Post()
    create(
        @Body() body: { userId: number, mataKuliahId: number },
        @Body() payload: { start: number, end: number, semester: number }
    ) {
        return this.userMatkulServ.create(body, payload)
    }
}
