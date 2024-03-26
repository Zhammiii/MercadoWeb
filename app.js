const express = require("express");
const app = express();
const PORT = 3000;
const exphbs = require("express-handlebars");


app.use(express.static(__dirname + "/public"));


/* HANDLEBARS SETTINGS */
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components/",
  })
);
app.set("view engine", "handlebars");

/* BOOTSTRAP MIDDLEWARE */
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))


/* RUTA GET */
app.get("/", function (req, res) {
    const { verdura } = req.params;
  
    res.render("Dashboard", {
      layout: "Dashboard",
      verduras: [
        { nombre: "Banana", imagen:"/img/banana.png" },
        { nombre: "Cebollas", imagen: "/img/cebollas.png" },
        { nombre: "Lechuga", imagen: "/img/lechuga.png" },
        { nombre: "Papas", imagen: "/img/papas.png" },
        { nombre: "Pimenton", imagen: "/img/pimenton.png" },
        { nombre: "Tomate", imagen: "/img/tomate.png" },
      ],
      verdura: verdura,
    });
});

app.get("*", (req, res) => {
  res.send("Esta página no existe");
});

/* LEVANTO EL SERVIDOR */
app.listen(PORT, () => {
  console.log(`SERVIDOR LEVANTADO EN EL PUERTO ${PORT}`);
});

