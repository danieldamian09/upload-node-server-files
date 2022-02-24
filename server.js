const express = require("express");
const res = require("express/lib/response");
const multer = require("multer")
const app = express();

// configuracion de multer
const upload = multer({
  dest:"uploads/"
})

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html")
});

// Permitir que el usuario nos envie archivos
app.post("/file",upload.single("avatar"), (req, resp) => {
  res.send("Archivo subido con exito")
})

app.listen(8000, () => console.log("Server started"));
