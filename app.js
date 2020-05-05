"use strict"

const url = "http://localhost:8080";

const express = require("express");
const app = express();
const port = 8181;
const getJSON = require("get-json");

app.get("/users/:id", (request,response)=>{
    let id = request.params.id;
    getJSON(`${url}/users/${id}`, (err,resp) =>{
        if(resp) response.send(resp);
        if(err) response.send(err);
    });

})

app.get("/about", (request,response)=>{
    response.send("Marcus Crabtree<br>Wannabe cool guy<br>Prestige Worldwide");
});

app.get("/", (request,response)=>{
    response.send("Express web server is ready...");
});

app.listen(port, ()=> {
    console.log(`Express server listening on port ${port}`);
})