import express, {Request,Response,Application} from 'express';
import path from 'path';

const app:Application=express();

const custom=require("./customModule.js");

const bp=require("body-parser");
app.use(bp.urlencoded({extended:false}));

//app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );
//app.use(express.static(__dirname + '/public'));

let x:string, y:string="";

app.get("/", function(req:Request, res:Response)
{
    //res.sendFile(path.join(__dirname + '/home.html'));
    res.render("home", {result: x });
});

app.post("/", function(req:Request, res:Response)
{
    x=req.body.N1.replace(/\s/g, "").toUpperCase();
    y=req.body.N2.replace(/\s/g, "").toUpperCase();
    console.log(x+"-"+y);
    let custom_obj=new custom(x, y);
    x=custom_obj.flames();
    console.log(x);
    
    res.redirect("/");
    
});

app.listen(3000,():void=>
{
    console.log("servver up");
});