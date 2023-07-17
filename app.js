const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');;

const itemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model("Item", itemSchema);


const item1 = new Item({
  name: "Welcome to your todolist ."
});

const item2 = new Item({
  name: "Hit the + button to add a new item."
});


const item3 = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];


Item.insertMany(defaultItems)
  .then(function(){
    console.log("Successfully saved into our DB.");
  })
  .catch(function(err){
    console.log(err);
  });

app.get("/",function(req, res){

Item.find

  res.render("list", {listTitle: "Today", newListItems: items});

});

// app.post("/", function(req,res){
//    var item = req.body.newItem;
//
//    items.push(item);
//
//      res.redirect("/");
// })


app.post("/",function(req,res){

  let item = req.body.newItem;

  if(req.body.list ===  "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{

    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",function(req,res){

  res.render("list",{listTitle:"Work list", newListItems: workItems})
});


app.listen(3000,function(){

console.log("Server is hosting at port 3000");

});
