const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/dist")));

app.post("/api/contact", (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            success:false,
            message:"Tous les champs sont obligatoires"
        });
    }


    const emailValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


    if(!emailValid){
        return res.status(400).json({
            success:false,
            message:"Email invalide"
        });
    }


    const data = {
        name,
        email,
        message,
        date:new Date()
    };


    let messages=[];

    if(fs.existsSync("messages.json")){
        messages = JSON.parse(
            fs.readFileSync("messages.json")
        );
    }


    messages.push(data);


    fs.writeFileSync(
        "messages.json",
        JSON.stringify(messages,null,2)
    );


    res.json({
        success:true,
        message:"Message reçu avec succès"
    });

});


app.get("*",(req,res)=>{
    res.sendFile(
        path.join(__dirname,"client/dist/index.html")
    );
});


app.listen(PORT,()=>{
    console.log(`Serveur lancé sur ${PORT}`);
});