const express = require("express");

const app = express();

app.get("/admin",(req,res) => {
    res.send({FirstName:"Jaiyash" }) //request handler
});

app.post("/admin",(req,res) => {
    res.send("data saved to the database successfullu") //request handler
});

app.delete("/admin",(req,res) => {
    res.send("Deleted successfully") //request handler
});
app.use("/test",(req,res) => {
    res.send("Hello from the jack") //request handler
});




app.listen(7777,() => {
    console.log("Server is listening successfully on port 7777...");
});

