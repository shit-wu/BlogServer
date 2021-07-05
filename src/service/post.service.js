const { addArticle } = require("../app/article.database");

class PostService {
    async postArticle(article) {
        console.log("用户传递的文章", article);
        const result = await addArticle(article);
        return result;
    }
}

module.exports = new PostService();
