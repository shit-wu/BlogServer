const { updateArticle } = require("../app/article.database");

class UpdateService {
    async updateArticle(article) {
        const result = await updateArticle(article);
        return result;
    }
}

module.exports = new UpdateService();
