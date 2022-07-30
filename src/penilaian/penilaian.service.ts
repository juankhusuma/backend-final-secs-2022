import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePenilaianDto, UpdatePenilaianDto } from './dto/penilaian.dto';

@Injectable()
export class PenilaianService {
    constructor(private db: PrismaService) {}

    getAll() {
        return this.db.user.findMany({
            include: {
                Penilaian: true
            }
        })
    }

    findOne(req: any) {
        return this.db.user.findFirst({
            where: { id: req.user.id },
            include: {
                Penilaian: true
            }
        })
    }

    async create(dto: CreatePenilaianDto) {
        return await this.db.penilaian.create({
            data: {
                User: {
                    connect: {
                        id: +dto.userId
                    }
                },
                kehadiran: +dto.kehadiran,
                total_sks: +dto.total_sks,
                tugas: +dto.tugas,
                uas: +dto.uas,
                semester: +dto.semester
            }
        })
    }

    async update(id: number, body: UpdatePenilaianDto) {
        return await this.db.penilaian.update({
            where: {
                id: +id
            },
            data: {
                kehadiran: +body.kehadiran,
                total_sks: +body.total_sks,
                tugas: +body.tugas,
                uas: +body.uas,
                semester: +body.semester
            }
        })
    }

    delete(id: number) {
        return this.db.penilaian.delete({
            where: {
                id: +id
            }
        })
    }
}
