var HelloCommandAssistant = function() {
}

HelloCommandAssistant.prototype.run = function(future) {
    console.log("***************Hello "+ future.args.name);
    future.result = {reply: "Hello " + future.args.name + "!"};
}