let mongoose = require("mongoose");

mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    username:{type:String},
    request:{type:String}
});

let RequestSchema = mongoose.model("Request", requestSchema);

module.exports = RequestSchema;