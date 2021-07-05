const Jwt = require("jsonwebtoken");

const { PRIVATE_KEY } = require("../app/config");

class AuthController {
    async login(ctx, next) {
        const { uid, username } = ctx.user;
        // token颁发
        const token = Jwt.sign({ uid, username }, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: "RS256",
        });
        ctx.body = { uid, username, token };
    }

    async success(ctx, next) {
        ctx.body = "授权成功~";
    }
}

module.exports = new AuthController();
