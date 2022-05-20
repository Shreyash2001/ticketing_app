import express from "express";
const app = express();

app.use(express.json());
 

app.get("/api/users", (req, res) => {
    res.send("Hi there!!");
});
 
app.listen(3000, () => console.log("Server started on Port 3000!!!"));