const express=require('express');
const bodyparser=require('body-parser');
const exp = require('constants');

const app=express();
app.use(bodyparser.urlencoded({extended:true}));

const host='localhost';
const port=3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/',(req,res)=>{
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    if(req.body.add)
    {
        var ans=n1+n2;
        res.send('the value is '+ans);  
    }
    else if(req.body.sub){
            var ans=n1-n2;
        res.send('the value is '+ans);
    }


    
})

app.post('/',(req,res)=>{
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var ans=n1-n2;

    res.send('the ans is '+ans);
})

app.listen(port,()=>{
    console.log('servr runs at '+port);
})

