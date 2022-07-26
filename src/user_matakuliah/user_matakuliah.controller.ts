import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreateUserMataKuliahDto, UpdateUserMataKuliahDto } from './dto/user-matakulia.dto';
import { UserMatakuliahService } from './user_matakuliah.service';

@Controller('user-matakuliah')
export class UserMatakuliahController {
    constructor(private userMatkulServ: UserMatakuliahService) {}

    @UseGuards(AuthGuard("jwt"))
    @Get()
    findProfileMatkul(@Req() req: Request) {
        return this.userMatkulServ.userMatkul(req)
    }
    
    @UseGuards(AuthGuard("jwt"))
    @Post()
    create(
        @Req() req: Request,
        @Body() body: CreateUserMataKuliahDto,
    ) {
        return this.userMatkulServ.create(req, body)
    }

    @UseGuards(AuthGuard("jwt"))
    @Patch('/:id')
    update(
        @Req() req: Request,
        @Param('id') param: number,
        @Body() body: UpdateUserMataKuliahDto
    ) {
        return this.userMatkulServ.update(req, param, body)
    }
    
    @UseGuards(AuthGuard("jwt"))
    @Delete('/:id')
    delete(
        @Req() req: Request,
        @Param('id') id: number
    ) {
        return this.userMatkulServ.delete(req, id)
    }
}
