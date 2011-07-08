var HelloCommandAssistant = function() {
}

HelloCommandAssistant.prototype.run = function(future) {
    //console.log("***************Hello "+ this.controller.args.name);
    //future.result = {reply: "Hello " + this.controller.args.name + "!"};
	
	var http = require('http');
	http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');
}