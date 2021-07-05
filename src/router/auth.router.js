const Router = require("koa-router");

const { verifyLogin, verifyAuth } = require("../middleware/auth.middleware");
const { login, success } = require("../controller/auth.controller");

const authRouter = new Router({ prefix: "/login" });

authRouter.post("/", verifyLogin, login);
authRouter.get("/test", verifyAuth, success);

module.exports = authRouter;
