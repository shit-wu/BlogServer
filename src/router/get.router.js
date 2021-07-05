const Router = require("koa-router");

const GetController = require("../controller/get.controller");

const getRouter = new Router({ prefix: "/get" });

getRouter.get("/", GetController.getArticle);

module.exports = getRouter;
