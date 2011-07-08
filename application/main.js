enyo.kind({
   name: "main",
   kind: enyo.Control,
   components: [
      {content: "Hello world"},
	  {kind: "Button", onclick: "runserver"},
      {
         name: "hello",
         kind: "PalmService",
         service: "palm://com.ddluk.testnode.service/",
         subscribe: true,
         timeout: 10000
      },
   ],
   runserver: function() {
   	this.$.hello.call(
	{"name": "World"},
	{method:"startHTTPServer", onSuccess:"successFunc",onFailure:"failureFunc"})
   	//this.$.hello.call(
	//{"name": "World"},
    //{method:"hello", onSuccess:"successFunc",onFailure:"failureFunc"}
//)
   },
   successFunc: function(inResponse, successData) {
   	console.log("dziala")
	console.log("Success Data: " + enyo.json.stringify(successData.reply));
   },
   failureFunc: function(inResponse, failData) {
   	console.log("nie dziala");
	console.log("Fail Data:" + enyo.json.stringify(failData));
   }
});
