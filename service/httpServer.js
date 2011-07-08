var httpServerAssistant = function(){


};

httpServerAssistant.prototype.run = function(future) {
	
	console.log("***************Hello "+ this.controller.args.name);
    future.result = {reply: "Hello " + this.controller.args.name + "!"};
	
var http = require('http');
      var server = http.createServer(function (req, res) {
         console.log('connect');
         res.writeHead(200, {'Content-Type': 'text/plain'});
         res.end('Hello World\n');
      });
      server.listen(7632, '127.0.0.1');	

}

