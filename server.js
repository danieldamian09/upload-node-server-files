const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html")
});

// Permitir que el usuario nos envie archivos
app.post("/file", (req, resp) => {
  
})

app.listen(8000, () => console.log("Server started"));
