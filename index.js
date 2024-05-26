

const express = require("express");
const app = express();
const port = 3001;

const { getRobots, getRobotsById } = require("./controllers/getRobots");

app.get("/zapatillas", getRobots);

app.get("/zapatillas/:id", getRobotsById);

app.listen(port, () => {
    console.log(`Conectado en el puerto: ${port} xd`);
});



// aqui xd
