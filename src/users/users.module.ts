import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, PrismaService],
  exports: [PrismaService]
})
export class UsersModule {}
