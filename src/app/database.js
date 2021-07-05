// const { Sequelize } = require("sequelize");
// const config = require("./config");

// const { Article, queryArticle } = require("./article.database");
// const User = require("./user.database");

// const sequelize = new Sequelize(
//     config.MYSQL_DATABASE,
//     config.MYSQL_USER,
//     config.MYSQL_PASSWORD,
//     {
//         host: MYSQL_HOST,
//         dialect: "mysql",
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000,
//         },
//     }
// );

// sequelize
//     .authenticate()
//     .then(async () => {
//         console.log(`database connect success~`);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
