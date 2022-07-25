import { BadRequestException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MataKuliahService {
    constructor(private db: PrismaService) {}

    all() {
        return this.db.mataKuliah.findMany({
            select: {
                id: true,
                code: true,
                name: true,
                room: true,
                class: true,
                prodi: true,
                User_MataKuliah: {
                    select: {
                        schedule: true,
                        start: true,
                        end: true,
                        semester: true,
                        User: true
                    }
                },
            }
        })
    }

    async create(dataInput: Prisma.MataKuliahCreateInput) {
        const codeUnique = await this.db.mataKuliah.findFirst({ where: { code: dataInput.code } })
        if(codeUnique) throw new BadRequestException("Gunakan code yang unik")
        const data = {
            code: dataInput.code,
            name: dataInput.name,
            room: dataInput.room,
            class: dataInput.class,
            prodi: dataInput.prodi
        }

        return await this.db.mataKuliah.create({
            data,
        })
    }

    async update(id: number, dataInput: Prisma.MataKuliahUpdateInput) {
        const codeUnique = await this.db.mataKuliah.findFirst({ where: { id } }) 
        
        if(codeUnique.code != dataInput.code) {
            return await this.db.mataKuliah.update({
                where: { id: +id },
                data: {
                    code: dataInput.code,
                    name: dataInput.name,
                    room: dataInput.room,
                    class: dataInput.class,
                    prodi: dataInput.prodi
                }
            })
        } else {
            return await this.db.mataKuliah.update({
                where: { id: +id },
                data: {
                    name: dataInput.name,
                    room: dataInput.room,
                    class: dataInput.class,
                    prodi: dataInput.prodi
                }
            })
        }
    }

    remove(id: number) {
        return this.db.mataKuliah.delete({
            where: { id: +id }
        })
    }
}
