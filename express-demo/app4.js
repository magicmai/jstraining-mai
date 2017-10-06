var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;
var router = express.Router();

/*
router.use的作用是加载一个函数。这个函数被称为中间件，作用是在请求被路由匹配之前，先进行一些处理。上面这个中间件起到 logging 的作用，每收到一个请求，就在命令行输出一条记录。请特别注意，这个函数内部的next()，它代表下一个中间件，表示将处理过的请求传递给下一个中间件。这个例子只有一个中间件，就进入路由匹配处理（实际上，bodyparser、router本质都是中间件，整个 Express 的设计哲学就是不断对 HTTP 请求加工，然后返回一个 HTTP 回应）。
 */
router.use(function(req, res, next) {
  console.log('There is a requesting.');
  // 练习1：请增加一个中间件，服务器每次收到用户请求，会在服务器的控制台打印出收到请求的时间。
  let t = new Date();
  console.log('请求时间：' + t.toLocaleString());
  
  next();
});

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function (req, res) {
  // var name = req.body.name;
  
  // 练习2：URL 的查询字符串，可以用req.query.name拿到。
  var name = req.query.name;
  res.json({message: 'Hello ' + name});
});

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
