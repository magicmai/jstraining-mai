var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
// body-parser模块的作用，是对POST、PUT、DELETE等 HTTP 方法的数据体进行解析。
app.use(bodyParser.urlencoded({ extended: true }));
// app.use用来将这个模块加载到当前应用。
var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
