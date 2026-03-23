const express = require("express");

const app = express();

app.get("/user",(req,res) => {
    res.send({FirstName:"Jatin" ,lastname:"Kumar"}) //request handler
});

app.post("/user",(req,res) => {
    res.send("data saved to the database successfullu") //request handler
});

app.delete("/user",(req,res) => {
    res.send("Deleted successfully") //request handler
});
app.use("/test",(req,res) => {
    res.send("Hello from the jack") //request handler
});

app.use("/hello",(req,res) => {
    res.send("Hello hello hello")
});


app.listen(3000,() => {
    console.log("Server is listening successfully on port 3000...");
});

