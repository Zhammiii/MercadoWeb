const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 3000;
const products = ['banana','cebolla','lechuga','papas','pimenton','tomate']

/* static */
app.use(express.static("public"));

/* Middlewares de JQuery y Bootstrap*/
app.use("/css",express.static(__dirname + "/node_modules/bootstrap/dist/css")
);

app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));


/* Handlrebars */
app.engine(
    "handlebars",
    exphbs.engine({
      layoutsDir: __dirname + "/views",
      partialsDir: __dirname + "/views/components",
    })
  );
  app.set("view engine", "handlebars");
  
  
/* app.get("/:products", function (req, res) {
    const { products } = req.params;
  
    res.render("Inicio", {
      layout: "Inicio",
      productos: [
        "banana",
        "cebolla",
        "lechuga",
        "papas",
        "pimenton",
        "tomate",
      ],
      productos: productos,
      
    });
  }); */
  

/* Levantar servidor */
app.listen(PORT, () => {
  console.log(`ESTAMOS CONECTADOS AL PUERTO ${PORT} `);
});
