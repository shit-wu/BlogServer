const Koa = require("koa");

const cors = require("@koa/cors");

const bodyParser = require("koa-bodyparser");

const postRouter = require("../router/post.router");

const getRouter = require("../router/get.router");

const deleteRouter = require("../router/delete.router");

const updateRouter = require("../router/update.router");

const authRouter = require("../router/auth.router");

const app = new Koa();

app.use(bodyParser());
app.use(cors());

app.use(postRouter.routes());
app.use(postRouter.allowedMethods());

app.use(getRouter.routes());
app.use(getRouter.allowedMethods());

app.use(deleteRouter.routes());
app.use(deleteRouter.allowedMethods());

app.use(updateRouter.routes());
app.use(updateRouter.allowedMethods());

app.use(authRouter.routes());
app.use(authRouter.allowedMethods());

module.exports = app;
