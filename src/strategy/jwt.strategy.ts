import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req) => {
                    let token: string;
                    if (req && req.cookies) {
                        token = req.cookies["jwt_token"]
                    }
                    return token
                }
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    }

    public async validate(payload: any) {
        return { id: payload.sub, username: payload.username, Role: payload.Role }
    }
}  