var http= require('http');
var path =require('path');
var exp =require('express');
var bodyparser=require('body-parser');
var app =exp();
 
var port =process.env.port||3000
app.use(bodyparser())
console.log(__dirname);
app.get('/',function(req,res){
    res.sendFile('index.html',{root:path.join(__dirname,'./frontendTest')});

});
app.post('/dd',function(req,res){
res.end(JSON.stringify(req.body))
})


app.listen(process.env.PORT || 3000,function(){
//console.log(port);
});
