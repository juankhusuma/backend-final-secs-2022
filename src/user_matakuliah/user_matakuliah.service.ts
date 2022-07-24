import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserMatakuliahService {
    constructor(private db: PrismaService) {}

    userMatkul(req: any) {
        return this.db.user.findFirst({
            where: { id: req.id },
            select: {
                username: true,
                name: true,
                Role: true,
                createdAt: true,
                updatedAt: true,
                User_MataKuliah: {
                    select: {
                        schedule: true,
                        start: true,
                        end: true,
                        semester: true,
                        MataKuliah: true
                    }
                }
            }
        })
    }

    async create(body: any, payload: any) {
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
                start: payload.start,
                end: payload.end,
                semester: payload.semester
            }
        })
    }
}
