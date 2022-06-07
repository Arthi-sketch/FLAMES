"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const custom = require("./customModule.js");
const bp = require("body-parser");
app.use(bp.urlencoded({ extended: false }));
//app.set( "views", path.join( __dirname, "views" ) );
app.set("view engine", "ejs");
app.use(express_1.default.static(__dirname + '/public'));
let x, y = "";
app.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname + '/home.html'));
    res.render("home", { result: x });
});
app.post("/", function (req, res) {
    x = req.body.N1.replace(/\s/g, "").toUpperCase();
    y = req.body.N2.replace(/\s/g, "").toUpperCase();
    console.log(x + "-" + y);
    let custom_obj = new custom(x, y);
    x = custom_obj.flames();
    console.log(x);
    res.redirect("/");
});
app.listen(3000, () => {
    console.log("servver up");
});
