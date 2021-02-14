const {Router} = require ("express");
const users = require("./users");
const products = require("./products");




const router = new Router();

router.use(users);
router.use(products);


router.use((req,res)=>{
    const error = new Error ("Not found");
    error.status = 404;
    next(error);
})


module.exports = router;