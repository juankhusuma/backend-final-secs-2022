import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserMatakuliahService } from './user_matakuliah.service';

@Controller('user-matakuliah')
export class UserMatakuliahController {
    constructor(private userMatkulServ: UserMatakuliahService) {}

    @Post()
    create(@Body() body: { userId: number, mataKuliahId: number }) {
        return this.userMatkulServ.create(body)
    }
}
