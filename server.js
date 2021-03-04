var static = require('node-static');
let port = 8080;

var file = new static.Server('./dist/home/home.html');
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port, () => { 
  console.log('Server started on port' + port);
});