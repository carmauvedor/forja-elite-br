const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const usuarios = [
 { user: "admin", pass: "1234", rol: "jefe" }
];

app.post("/login",(req,res)=>{
 const u = usuarios.find(x=>x.user===req.body.user && x.pass===req.body.pass);
 if(!u) return res.status(401).json({});
 res.json(u);
});

app.listen(3000,()=>console.log("OK"));
