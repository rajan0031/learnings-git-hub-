import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("hello from the backend");
})

app.listen(3001, () => {
    console.log("server is listening at the port for the yashi only git hub  ", 3001)
})