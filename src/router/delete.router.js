const Router = require("koa-router");

const { deleteArticle } = require("../controller/delete.controller");

const deleteRouter = new Router({ prefix: "/delete" });

deleteRouter.delete("/", deleteArticle);

module.exports = deleteRouter;
