const {Router} = require("express");
const router = new Router();
const controller = require("../controllers/users");


const routerName = "/users"

router.post(`${routerName}/login`,controller.login)



module.exports = router;