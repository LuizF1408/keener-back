const express = require('express');
const cors = require('cors')
const routes = require("./src/routes")
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();
const port = process.env.PORT || 5555

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(routes)

app.use((error,req,res,next) => {
    res.status(error.status || 500).json({...error,message: error.message});
});

app.listen(port,(err) => {
if(err) return console.log(`Não startou ${err}`);
console.log("Online na porta",port)
})