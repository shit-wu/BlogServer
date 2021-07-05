const UpdateService = require("../service/update.service");

class UpdateController {
    async updateArticle(ctx, next) {
        const article = ctx.request.body;
        const result = await UpdateService.updateArticle(article);
        console.log(result);
        ctx.body = result;
    }
}

module.exports = new UpdateController();
