var express=require('express');
var path =require('path');
var exhbs=require('express-handlebars');
var data = require('./aa');
var dat2 = require('./hom');
var app=express();

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exhbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.set('port',(process.env.PORT||3000));

app.get('/',function(req,res){
  res.render('hom',data);
});

app.get('/hom',function(req,res){
  res.render('hom',dat2);
});
app.listen(app.get('port'),function(){
   console.log('Server Started on port '+app.get('port'));
});
