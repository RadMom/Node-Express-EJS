const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about",(req,res)=>{
  res.render("about");
})

app.get("/create",(req,res)=>{
  res.render("create");
})

app.use((req,res)=>{
  res.status(404).render("404");
})

app.listen(port, () => {
  console.log(`server is live on port: ${port}...`);
});
