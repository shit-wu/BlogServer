const DeleteService = require("../service/delete.service");

class DeleteController {
    async deleteArticle(ctx, next) {
        const articleId = ctx.request.body;
        const result = await DeleteService.deleteArticle(articleId);
        ctx.body = result;
    }
}

module.exports = new DeleteController();
