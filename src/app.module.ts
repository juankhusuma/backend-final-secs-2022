import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MataKuliahModule } from './mata_kuliah/mata_kuliah.module';
import { UserMatakuliahModule } from './user_matakuliah/user_matakuliah.module';

@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot(), MataKuliahModule, UserMatakuliahModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
