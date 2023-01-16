const Blog = require("../models/blog");

const blog_all = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.render("home", { blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};


const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render("details", { blog: result });
    })
    .catch((err) => {
      console.log(err);
      res.render("404");
    });
};

const blog_create_get = (req, res) => {
  res.render("create");
};

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(result => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  console.log(id + " DELETED");
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_all,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
