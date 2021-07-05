const Router = require("koa-router");

const { postArticle } = require("../controller/post.controller");

const postRouter = new Router({ prefix: "/post" });

postRouter.post("/", postArticle);

module.exports = postRouter;
