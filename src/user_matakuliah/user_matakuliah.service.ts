import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserMataKuliahDto, UpdateUserMataKuliahDto } from './dto/user-matakulia.dto';

@Injectable()
export class UserMatakuliahService {
    constructor(private db: PrismaService) {}

    userMatkul(req: any) {
        return this.db.user.findFirst({
            where: { id: req.user.id },
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

    async create(req: any, body: CreateUserMataKuliahDto) {
        const uniqueConstrait = await this.db.user_MataKuliah.findUnique({
            where: {
                userId_mataKuliahId: {
                    userId: req.user.id,
                    mataKuliahId: +body.mataKuliahId,
                }
            }
        })
        if(uniqueConstrait) throw new BadRequestException('Relasi sudah ada')
        
        return await this.db.user_MataKuliah.create({
            data: {
                User: {
                    connect: {
                        id: req.user.id,
                    },
                },
                MataKuliah: {
                    connect: {
                        id: +body.mataKuliahId
                    }
                },
                schedule: body.schedule,
                start: body.start,
                end: body.end,
                semester: +body.semester
            }
        })
    }

    async update(req: any, param: number, body: UpdateUserMataKuliahDto) {
        const userMatkul = await this.db.user_MataKuliah.findUnique({
            where: {
                userId_mataKuliahId: {
                    userId: req.user.id,
                    mataKuliahId: +param
                }
            }
        })
        if(!userMatkul) throw new NotFoundException("Not Found");

        return await this.db.user_MataKuliah.update({
            where: {
                userId_mataKuliahId: {
                    userId: req.user.id,
                    mataKuliahId: +param,
                }
            },
            data: {                
                schedule: body.schedule,
                start: body.start,
                end: body.end,
                semester: +body.semester
            }
        })
    }

    async delete(req: any, id: number) {
        const userMatkul = await this.db.user_MataKuliah.findUnique({
            where: {
                userId_mataKuliahId: {
                    userId: req.user.id,
                    mataKuliahId: +id
                }
            }
        })
        if(!userMatkul) throw new NotFoundException("Not Found");
        
        await this.db.user_MataKuliah.delete({
            where: {
                userId_mataKuliahId: {
                    userId: req.user.id,
                    mataKuliahId: +id
                }
            }
        })

        return {
            "statusCode": 200,
            "message": "Berhasil menghapus matakuliah dari user yang login"
        }
    }
}
