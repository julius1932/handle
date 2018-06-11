var express=require('express');
var path =require(path);
var exhbs=require('express-handlebars');

var app=express();

app.set('views',path.join(__dirname,'views'));
app.engine('handlebars',exhbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.set('port',(process.env.PORT||3000));

app.get('/',function(req,res){
  res.render(home);
});
app.listen(app.get('port'),function(){
   console.log('Server Started on port '+app.get('port'));
});
