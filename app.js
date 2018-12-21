var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/vi/:msg", function(req, res){
    var msg = req.params.msg
    res.render("vi.ejs", {msgVar:msg});
});
app.get("/posts", function(req, res) {
    var posts = [
        {title:"hi bro", author:"Vicky"},
        {title:"hi da", author:"muni"},
        {title:"hi d", author:"kavi"}
        ];
    res.render("posts.ejs", {posts:posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});