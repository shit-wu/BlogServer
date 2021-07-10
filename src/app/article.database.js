const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const config = require("./config");

const { v4: uuidv4 } = require("uuid");

const { User } = require("./user.database");

const sequelize = new Sequelize(
    config.MYSQL_DATABASE,
    config.MYSQL_USER,
    config.MYSQL_PASSWORD,
    {
        host: MYSQL_HOST,
        dialect: "mysql",
    }
);

// 连接验证
sequelize
    .authenticate()
    .then(() => {
        console.log("连接数据库成功~");
    })
    .catch((err) => {
        console.log("连接数据库失败!");
        console.log(err);
    });

// 创建表格示例
class Article extends Model {}

// 初始化表格
Article.init(
    {
        articleId: {
            type: DataTypes.UUIDV4,
            field: "article_id",
            defaultValue: uuidv4().toString(),
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            field: "user_id",
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: User,
                key: "uid",
            },
        },
        createdAt: {
            field: "created_At",
            type: DataTypes.TIME,
            allowNull: true,
        },
        updatedAt: {
            field: "updated_At",
            type: DataTypes.TIME,
            allowNull: true,
        },
    },
    {
        timestamps: false,
        tableName: "article",
        sequelize,
    }
);

Article.belongsTo(User, {
    foreignKey: "userId",
});

async function queryArticle() {
    try {
        const result = await Article.findAll();
        console.log(result);
        return result;
    } catch (error) {
        console.log(`查询失败${error}`);
        return error;
    }
}

async function addArticle(article) {
    let data = article;
    try {
        const result = await Article.create({
            articleId: uuidv4().toString(),
            title: data.title,
            category: data.category,
            tag: data.tag,
            content: data.content,
            userId: data.userId,
            createdAt: data.date,
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function deleteArticle(articleId) {
    const { id } = articleId;
    console.log(id);
    try {
        const article_delete = await Article.destroy({
            where: {
                articleId: id,
            },
        });
        if (article_delete == 0) {
            console.log(article_delete);
            throw new Error("该条目不存在~");
        } else {
            console.log(article_delete);
            // 此处应有同步或者重载操作
            console.log(`删除成功~`);
        }
    } catch (error) {
        console.log(error);
    }
}

async function updateArticle(article) {
    const id = article.id;
    try {
        const result = await Article.update(
            {
                title: article.title,
                category: article.category,
                tag: article.tag,
                content: article.content,
            },
            {
                where: {
                    articleId: id,
                },
            }
        );
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    Article,
    queryArticle,
    addArticle,
    deleteArticle,
    updateArticle,
};
