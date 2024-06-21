const express = require("express");
const path = require("path");
const app = express();
const PORT = 3002;

app.use(express.static("public"));

const TAVERNA = "/images/taverna.png";
const PORAO = "/images/porao.png";
const RATOS = "/images/ratos.png";
const HOBGOBLIN = "/images/hobgoblin.png";
const ZUMBI = "/images/zumbi.png";
const NAUFRAGIO = "/images/naufragio.png";
const PORTO = "/images/porto.png";
const ILHA = "/images/ilha.png";
const PANTANO_1 = "/images/pantano_1.png";
const PANTANO_2 = "/images/pantano_2.png";
const ENTRADA_CIDADE = "/images/entrada_cidade.png";
const CENTRO_CIDADE = "/images/centro_cidade.png";

app.get("/image-url", (req, res) => {
  const imgUrl = TAVERNA;
  res.json({ imgUrl });
});

app.get("/ui", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res, next) => {
  if (req.path.endsWith(".js")) {
    res.type("application/javascript");
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
