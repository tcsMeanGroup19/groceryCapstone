let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let requestRouter = require("./Routers/request.router");
let productRouter = require("./Routers/product.router");
let employeerequestRouter = require("./Routers/employeerequest.router");

// create the reference of express 
let app = express();

// add middleware 
app.use(cors());
app.use(bodyParser.json())

//url database 
let url = "mongodb://localhost:27017/Grocery"


mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));



// app.use("/api/product",routerProduct);


app.use("/api/requests",requestRouter);
app.use("/api/Employeerequests",employeerequestRouter);
app.use("/api/product",productRouter);


app.listen(9090,()=>console.log("Server running on port number 9090"))