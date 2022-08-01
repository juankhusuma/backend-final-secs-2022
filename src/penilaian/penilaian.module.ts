import { Module } from '@nestjs/common';
import { PenilaianService } from './penilaian.service';
import { PenilaianController } from './penilaian.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PenilaianService, PrismaService],
  controllers: [PenilaianController],
  exports: [PrismaService]
})
export class PenilaianModule {}
