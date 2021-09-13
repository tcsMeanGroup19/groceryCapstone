const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://faisal:capstone123@capstoneproject.h2rfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("database01").collection("admin");
  // perform actions on the collection object
  client.close();
});
