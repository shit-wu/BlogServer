const Router = require("koa-router");

const updateRouter = new Router({ prefix: "/update" });

const { updateArticle } = require("../controller/update.controller");

updateRouter.patch("/", updateArticle);

module.exports = updateRouter;
