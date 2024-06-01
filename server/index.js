const express = require("express");
const path = require("path");
const app = express();
const PORT = 3002;

app.use(express.static("public"));

const TAVERNA =
  "https://pouch.jumpshare.com/preview/LbIaD2Cgu0iwofJ40dRGbSJBB3iF-1IiehtdHEdlAzlUTVcTjplHp4P8L8Ya3oAmb1SrsX2PkV8vyT-ago9RKWjk2ctQpIipWYs3FkeFMwk";

const PORAO =
  "https://pouch.jumpshare.com/preview/j57uOrMnsBQixph1KRKzU2D6_6Zqai0EPH4GU0O2AMKFN3cI-vsH8WTT_pXLSBiSb1SrsX2PkV8vyT-ago9RKX-TSeuy607UZde9AphiOPo";

const RATOS =
  "https://pouch.jumpshare.com/preview/Id82MBTfjnmKFGBzzqoGzg593u3h4iJKgdt3wubAxJpuWgRZjY2jthf2XZjNo9_nb1SrsX2PkV8vyT-ago9RKel1PHTIEyYD3SOWaWTj3mg";

const HOBGOBLIN =
  "https://pouch.jumpshare.com/preview/63yrQHm-CDQg26m-96rHwv55cyMOrmY2LHjs4ejtZrDjGhl9PNaKT7oQaAoTze3mb1SrsX2PkV8vyT-ago9RKae32zMyAISHLKm7MG29a64";

const ZUMBI =
  "https://pouch.jumpshare.com/preview/WMXPRDpKv4xF0G0deNM9eqvLLqFzsPoyazbcFQEdxoekSdQL4NsX28Fb-oe5fN6pb1SrsX2PkV8vyT-ago9RKWigaNDJGg0RwMpVttnFkys";

const NAUFRAGIO =
  "https://pouch.jumpshare.com/preview/Me3SUN0jzCiVnT1HAuu9wxQAKFGvlBJFIEoCNJgBpHHnJghowS5kv4VOnigRX3BRb1SrsX2PkV8vyT-ago9RKUrWxkdyss8jFOeXFYKQ95c";

const PORTO =
  "https://pouch.jumpshare.com/preview/aNvsAXIXulD9k6yTF9VfL_4Oi1S53_GBBLgE_PFCW99wy27OlagjGJFl6q0B1saJb1SrsX2PkV8vyT-ago9RKdSUaIqKbY6TsZrm681Fo5A";

const ILHA =
  "https://pouch.jumpshare.com/preview/1IvPqqbt3mlpChIMBOEnaGFvNt_n-P2AQwiXU-1bq7YVVMtUg6wMeVA8YIA6qJMMb1SrsX2PkV8vyT-ago9RKTFcTZZPEZgwyMYCaCzBuv4";

const PANTANO_1 =
  "https://pouch.jumpshare.com/preview/6PgE01I3myiER1VvXiSBwOPVIr4YOkpOzVUZmJNa_Yfpz2_gwlVPg7Bh2wyJdYXIb1SrsX2PkV8vyT-ago9RKef-fqzDw03EmLCv9pfJfyQ";

const PANTANO_2 =
  "https://pouch.jumpshare.com/preview/6qpRmEHLRZ_dvsaVbAGd6oWmFb6FkPIWH-TiI-mNm54RhyE4h0J0DpJVNTlEU5XY60cb8l4IgsCZB-sdqMMEsUv13KtRNvYKLiRrXrKsRLk";

const ENTRADA_CIDADE =
  "https://pouch.jumpshare.com/preview/x1MxFcKxK2Ih8ZzILhy983nSGPpgnZpg_7mcTLhWbtF0VX_Houz9y6MPn2rR4Vzhb1SrsX2PkV8vyT-ago9RKUudKKzP1BnwjzSm1PSe4Q8";

const CENTRO_CIDADE =
  "https://pouch.jumpshare.com/preview/nnRIOzKnOzY3lCxQmNSBCmc0qROFKCHs5husjGLVoCg1HaLgMYZCDTcN1VNcwXerb1SrsX2PkV8vyT-ago9RKWp3xZGG2qY-oS80ECWAZts";

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
