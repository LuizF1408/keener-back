const handleError = require("./handleError");
const service = require("../services/products")


const getAll = async (req, res) => {
    try {
      const products = await service.getAll();
      res.json(products);
    } catch (e) {
      handleError(res, e);
    }
  };
  

  const create = async (req, res) => {
    try {
      const { value, name, cod, type, qtd } = req.body;
      if (!value || !name || !type || !cod || !qtd) {
        throw { status: 400, message: "Invalid Data" };
      }
      const created = await service.create(req.body);
      res.status(201).json(created);
    } catch (error) {
      handleError(res, error);
    }
  };

  const del = async (req, res) => {
    try {
      await service.del(req.params.cod);
      res.status(204).end();
    } catch (error) {
      handleError(res, error);
    }
  };

  module.exports = {
    getAll,
    create,
    del,
  };