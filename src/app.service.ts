import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
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

  async changePassword(req: any, body: any) {
    const _password = await hash(body.password, 10);
    return await this.db.user.update({
      where: {
        id: req.user.id
      },
      data: {
        password: _password
      }
    })
  }
}
