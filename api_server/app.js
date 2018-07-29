var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const PORT = 3000;
const VERSION = '1.0.0';

app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
  res.render('./index',{version:VERSION});
});

app.listen(PORT,function(){
  console.log(`Connect ${PORT} port!`)
});
