var http = require('http');

http.createServer(function(res, req) {
    console.log("Recebendo request");
}).listen(3000, function() {
    console.log("abri o servidor na porta 3000")
})