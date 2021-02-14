const { Router } = require("express");
const router = new Router();
const controller = require("../controllers/products");


const routeName = "/products";

router.get(routeName, controller.getAll);
router.post(routeName, controller.create);
router.delete(`${routeName}/:cod`, controller.del);

module.exports = router;
