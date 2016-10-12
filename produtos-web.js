var http = require("http");

http.createServer(function(req, res) {
    if (req.url == "/produtos")
        res.end("<h1>Estou na página de produtos</h1>");
    else
        res.end("<h1>Ainda não criei outra página</h1>")
}).listen(3000);
console.log("Estou rodando o servidor na porta 3000");