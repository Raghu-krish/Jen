const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h2>Hello world!</h2>");
});

app.listen(3000, function(){
  console.log("Server is up and running at 3000");
});
