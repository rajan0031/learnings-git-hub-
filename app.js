import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("hello from the backend");
})

app.listen(3001, () => {
    console.log("server is listening at the port ", 3001)
})

