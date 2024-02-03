const express = require("express");
require("./db/conn");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 8000;

const User = require("./models/usermessage");

//Setting The Path:
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");




//Middleware:
app.use('/css', express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname,"../node_modules/bbotstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs");

app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req,res) => {
    res.render("index");
});

app.get("/contact", (req,res) => {
    res.render("contact");
});

app.post("/contact", async(req, res) =>{
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        console.log(userData);

        res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, () =>{
    console.log(`server is running at port no : ${port}`);
});