import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from 'src/dto/auth.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly user: UsersService,
        private readonly jwt: JwtService    
    ) {}

    public async login(dto: LoginDTO) {
        const _user = await this.user.validate(dto.username, dto.password)
        if (!_user) throw new UnauthorizedException("Autentikasi Gagal");
        return this.sign(_user.id, _user.name, _user.username, _user.Role)
    }

    public async sign(id: number, name: string, username: string, Role: string) {
        return this.jwt.sign({
            sub: id,
            name,
            username,
            Role,
        })
    }
}
