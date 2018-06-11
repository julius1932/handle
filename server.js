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
  res.render('home',data);
});

app.get('/hom',function(req,res){
/*  var meds =dat2.session.medication.meds;
  var keys =Object.keys( meds);
  console.log(keys.length);
  var arr2=[];
  for(var key in keys){
    arr2.push(meds[key].medication);
  }
  dat2.medicns=arr2;*/
  res.render('hom',dat2);
});
app.listen(app.get('port'),function(){
   console.log('Server Started on port '+app.get('port'));
});
