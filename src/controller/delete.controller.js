const DeleteService = require("../service/delete.service");

class DeleteController {
    async deleteArticle(ctx, next) {
        const article = ctx.request.body;
        const result = await DeleteService.deleteArticle(article);
        ctx.body = result;
    }
}

module.exports = new DeleteController();
