var app = require('../server/server');

//SERVE APP//
var port = 8000;
app.listen(port, function (){
	console.log('running at localhost:'+port);
});