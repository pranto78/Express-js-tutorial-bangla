let express=require('express');

app=express();

app.get("/",function (req,res) {
    res.send("Hello Express Js");
});

app.listen(8000,function () {
    console.log("Server Run Success")
})