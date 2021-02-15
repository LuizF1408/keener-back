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

const create = async (req, res) => {
    try {
      const { password, username} = req.body;
      if (!password || !username) {
        throw { status: 400, message: "Invalid Data" };
      }
      const created = await service.create(req.body);
      res.status(201).json(created);
    } catch (error) {
      handleError(res, error);
    }
  };

  

module.exports = {login,create,}