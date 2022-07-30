import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreatePenilaianDto, UpdatePenilaianDto } from './dto/penilaian.dto';
import { PenilaianService } from './penilaian.service';

@Controller('penilaian')
export class PenilaianController {
    constructor(private penilaianServ: PenilaianService) {}

    @UseGuards(AuthGuard("jwt"))
    @Get()
    getNilai() {
        return this.penilaianServ.getAll()
    }

    @UseGuards(AuthGuard("jwt"))
    @Get("/user")
    findUserNilai(@Req() req: Request) {
        return this.penilaianServ.findOne(req)
    }
    
    @UseGuards(AuthGuard("jwt"))
    @Post()
    create(@Body() body: CreatePenilaianDto) {
        return this.penilaianServ.create(body)
    }
    
    @UseGuards(AuthGuard("jwt"))
    @Patch("/:id")
    update(
        @Param("id") id: number,
        @Body() body: UpdatePenilaianDto
    ) {
        return this.penilaianServ.update(id, body)
    }

    @Delete("/:id")
    delete(@Param("id") id: number) {
        return this.penilaianServ.delete(id)
    }
}
