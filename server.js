const express = require("express");
const multer = require("multer")
const cors = require("cors")
// const mimeTypes = require("mime-types")
const app = express();

app.use(cors());

// configuracion para l extension de la imagen
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function(req, file,cb){
    // aca asignamos el nombre al archivo
    cb("", file.originalname);
    
  }
})

// configuracion de multer
const upload = multer({
  storage
})

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html")
});

// Permitir que el usuario nos envie archivos
app.post("/files",upload.single("avatar"), (req, res) => {
  res.send("Archivo subido con exito")
})

app.listen(8000, () => console.log("Server started"));
