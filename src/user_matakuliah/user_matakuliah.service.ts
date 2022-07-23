import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserMatakuliahService {
    constructor(private db: PrismaService) {}

    async create(body) {
        return await this.db.user_MataKuliah.create({
            data: {
                User: {
                    connect: {
                        id: +body.userId,
                    },
                },
                MataKuliah: {
                    connect: {
                        id: +body.mataKuliahId
                    }
                },
                start: 1,
                end: 2,
                semester: 2
            }
        })
    }
}
