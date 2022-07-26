import { Module } from '@nestjs/common';
import { UserMatakuliahService } from './user_matakuliah.service';
import { UserMatakuliahController } from './user_matakuliah.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UserMatakuliahService, PrismaService],
  controllers: [UserMatakuliahController],
  exports: [PrismaService]
})
export class UserMatakuliahModule {}
