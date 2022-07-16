const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// meta information informing Express to use pug framework
app.set("view engine", "pug");
// we set this to inform our templating engine where all the
// html files are.
// by default, it's value is rootDir/views
app.set("views", "views");

const { routes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
