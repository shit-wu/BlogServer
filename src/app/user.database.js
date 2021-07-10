const { Sequelize, DataTypes, Model, Op } = require("sequelize");

const Article = require("./article.database");

const config = require("./config");

const { v4: uuidv4 } = require("uuid");

const sequelize = new Sequelize(
    config.MYSQL_DATABASE,
    config.MYSQL_USER,
    config.MYSQL_PASSWORD,
    {
        host: MYSQL_HOST,
        dialect: "mysql",
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("连接数据库成功~");
    })
    .catch((err) => {
        console.log("连接数据库失败!");
        console.log(err);
    });

class User extends Model {}

User.init(
    {
        uid: {
            type: DataTypes.STRING,
            defaultValue: uuidv4().toString(),
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    { timestamps: false, tableName: "user", sequelize }
);

async function getUser(userInfo) {
    console.log(userInfo);
    try {
        const result_user = await User.findAll({
            where: {
                username: {
                    [Op.eq]: `${userInfo.username}`,
                },
            },
        });
        if (result_user[0] == null) {
            console.log(result_user[0]);
            throw new Error("用户名错误!");
        } else if (userInfo.password != result_user[0].dataValues.password) {
            console.log("密码错误");
            throw new Error("密码错误!");
        } else {
            console.log(result_user);
            const user_uid = result_user[0].dataValues.uid;
            const user_username = result_user[0].dataValues.username;
            const data = { uid: user_uid, username: user_username };
            console.log(`用户名:`);
            console.log(data);
            return data;
        }
    } catch (error) {
        console.log(`用户不存在!`);
        console.log(error);
        return error;
    }
}

module.exports = { User, getUser };
