import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateMataKuliahDto, UpdateMataKuliahDto } from './dto/mata-kuliah.dto';
import { MataKuliahService } from './mata_kuliah.service';

@Controller('mata-kuliah')
export class MataKuliahController {
    constructor(private mataKuliahService: MataKuliahService) {}

    @UseGuards(AuthGuard("jwt"))
    @Get()
    getAllMataKuliah() {
        return this.mataKuliahService.all();
    }
    
    @UseGuards(AuthGuard("jwt"))
    @Post()
    create(@Body() payload: CreateMataKuliahDto) {
        return this.mataKuliahService.create(payload)
    }
    
    @UseGuards(AuthGuard("jwt"))
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateMataKuliahDto: UpdateMataKuliahDto) {
        return this.mataKuliahService.update(+id, updateMataKuliahDto)
    }
    
    @UseGuards(AuthGuard("jwt"))
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.mataKuliahService.remove(+id);
    }
}
