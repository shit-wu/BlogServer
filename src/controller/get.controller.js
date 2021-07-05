const GetService = require("../service/get.service");

class GetController {
    async getArticle(ctx, next) {
        const result = await GetService.getArticle();
        ctx.body = result;
    }
}

module.exports = new GetController();
