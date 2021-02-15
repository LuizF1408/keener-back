const {Router} = require("express");
const router = new Router();
const controller = require("../controllers/users");


const routerName = "/user"

router.post(`${routerName}/login`,controller.login)
router.post(`${routerName}/create`,controller.create)




module.exports = router;