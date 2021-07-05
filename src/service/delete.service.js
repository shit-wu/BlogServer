const { deleteArticle } = require("../app/article.database");

class DeleteService {
    async deleteArticle(article) {
        const result = await deleteArticle(article);
        return result;
    }
}

module.exports = new DeleteService();
