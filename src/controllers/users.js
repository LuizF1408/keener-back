const handleError = require("./handleError");
const service = require("../services/user")


const login = async (req, res) => {
    try {
        if (!req.body.username || !req.body.password) {
            throw { status: 400, message: "Invalide data" };
        }
        const data = await service.login(req.body);
        res.json(data);
    }
    catch (error) {
        handleError(res, error);
    }


}

module.exports = {login}