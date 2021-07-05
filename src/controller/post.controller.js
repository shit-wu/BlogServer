const PostService = require("../service/post.service");

class PostController {
    async postArticle(ctx, next) {
        const article = ctx.request.body;
        const result = await PostService.postArticle(article);
        ctx.body = result;
    }
}

module.exports = new PostController();
