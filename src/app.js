import express from "express";
import exphbs from "express-handlebars";
const app = express();
const PORT = process.env.PORT || 4000;

// HANDLEBARS MIDDLEWARE
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/app", (req, res) => {
  res.send({ data: "This is api call." });
});

app.listen(PORT, () => console.log(`Server is started at ${PORT}`));
