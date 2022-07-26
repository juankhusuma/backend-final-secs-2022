import { Module } from '@nestjs/common';
import { MataKuliahService } from './mata_kuliah.service';
import { MataKuliahController } from './mata_kuliah.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [MataKuliahService, PrismaService],
  controllers: [MataKuliahController],
  exports: [PrismaService]
})
export class MataKuliahModule {}
