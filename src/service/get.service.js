const { queryArticle } = require("../app/article.database");

class GetService {
    async getArticle() {
        const result = await queryArticle();
        return result;
    }
}

module.exports = new GetService();
