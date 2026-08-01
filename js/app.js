const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Permet de servir les fichiers CSS, JS et images
app.use(express.static(__dirname));

// Route principale
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});