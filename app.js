var express = require("express");
var app = express();

app.set('view engine', 'json');

app.get("/produtos", function(request, response) {
    response.render("produtos.json");
});

app.listen(3000, function() {
    console.log("Estou rodando servidor com o Express");
});