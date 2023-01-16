require('dotenv').config()

const express = require("express");
const mongoose=require("mongoose")
const app = express();
const port = 3000;
const blogRoutes=require("./routes/blogRoutes");

const URL=process.env.DATABASE_URL;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000,()=>{
  console.log(`server is live on port: ${port}...`)
  }))
  .catch(err => console.log(err));

app.set("view engine", "ejs");
app.use(express.static( __dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// blog routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
  res.status(404).render("404");
});


