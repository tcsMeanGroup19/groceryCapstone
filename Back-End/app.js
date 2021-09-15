let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let requestRouter = require("./Routers/request.router");

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/tcsmean"


mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));



// app.use("/api/product",routerProduct);


app.use("/api/requests",requestRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"))