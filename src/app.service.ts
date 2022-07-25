import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private db: PrismaService) {}

  get(req: any) {
    return this.db.user.findUnique({
      where: {
        id: req.user.id
      },
      select: {
        id: true,
        name: true,
        username: true,
        Role: true
      }
    })
  }
}
