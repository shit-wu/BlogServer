const { login } = require("../app/user.database");

class LoginService {
    async login(userInfo) {
        console.log(
            `用户传递的账户信息: ${userInfo.username}\n${userInfo.password}`
        );
        const result = await login(userInfo);
        return result;
    }
}

module.exports = new LoginService();
