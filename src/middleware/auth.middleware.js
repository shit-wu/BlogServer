const Jwt = require("jsonwebtoken");

const errorTypes = require("../constans/error-type");
const { PUBLIC_KEY } = require("../app/config");

const { getUser } = require("../app/user.database");

const verifyLogin = async (ctx, next) => {
    console.log("验证登录的middleware~");

    const { username, password } = ctx.request.body;

    // 判断非空
    if (!username || !password) {
        const error = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUIRED);
        return ctx.app.emit("error", error, ctx);
    }

    // 判断用户是否存在
    const result = await getUser(username);
    if (result instanceof Error) {
        const error = new Error(errorTypes.USER_DOES_NOT_EXISTS);
        return ctx.app.emit("error", error, ctx);
    }

    // 应该有比对密码的操作

    ctx.user = result;
    await next();
};

const verifyAuth = async (ctx, next) => {
    console.log("验证授权的middleware");
    //获取token
    const authorization = ctx.headers.authorization;
    if (!authorization) {
        const error = new Error(errorTypes.UNAUTHORIZATION);
        return ctx.app.emit("error", error, ctx);
    }
    const token = authorization.replace("Bearer ", "");

    //验证token
    try {
        const result = Jwt.verify(
            token,
            PUBLIC_KEY,
            {
                algorithms: ["RS256"],
            },
            (err, decoded) => {
                if (err) {
                    console.log(err);
                    throw new Error(err);
                }
            }
        );
        ctx.user = result;
        await next();
    } catch (err) {
        const error = new Error(errorTypes.UNAUTHORIZATION);
        ctx.app.emit("error", error, ctx);
    }
};

module.exports = { verifyLogin, verifyAuth };
