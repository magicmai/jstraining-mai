var express    = require('express');
var app        = express();

var port = process.env.PORT || 8080;
/* windows
$ set PORT=7070
$ node app1.js
 */
var router = express.Router();

console.log('router: ', router);
/*
 function router(req, res, next) {
 	router.handle(req, res, next);
 }
 */

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
