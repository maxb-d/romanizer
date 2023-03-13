import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { jwtSecret } from "src/utils/constants";
import { Request } from "express";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                JwtStrategy.extractJWT,
                ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            secretOrKey: jwtSecret,
        })
    }

    private static extractJWT(req: Request): string | null {
        console.log(req.cookies)
        if (req.cookies && 'token' in req.cookies) {
            return req.cookies.token
        }
        console.log('didnt find a cookie')
        return null
    }

    async validate(payload: { id: string; username: string }) {
        return payload
    }
}