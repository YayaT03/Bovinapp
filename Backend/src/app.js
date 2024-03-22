const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

require('../src/database');

const app = express();

app.set("Port", 4000);

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({origin: "*"}));

app.use("/bovinos ",require('./Routers/bovino.route'));


app.listen(app.get('Port'), () => { 
    console.log("servidor corriendo por el puerto", 
    app.get('Port'));
 });