const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
const fakeApi = require("./fakedata");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/main");
const PORT = 3001;

app.set("view engine", "hbs");

//Sets handlebars configurations (we will go through them later on)
app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials/",
  })
);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(mainRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
