const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//db connection
const db =
    "mongodb+srv://chucks:test123@first-node.mbh6x.mongodb.net/my-blog?retryWrites=true&w=majority";
mongoose
    .connect(db)

    .then((result) => app.listen(3001))
    .catch((err) => console.log(err));

//templating engine
app.set("view engine", "ejs");

//Request server

//middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// app.get('/add-blog', (req,res)=>{
//     const blog = new Blog({
//         title:"new blog2",
//         description:'lets build something amazing',
//         content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi et in vitae recusandae atque repellat asperiores tempora debitis distinctio'

//     });
// blog.save()
// .then((result)=>{
//     res.send(result)
// })
// .catch((err)=>{
//     console.log(err)
// })
// })

// app.get('/all-blog', (req,res)=>{

// Blog.find()
// .then((result)=>{
//     res.send(result)
// })
// .catch((err)=>{
//     console.log(err)
// })
// })

// app.get('/blogs/:id', (req,res)=>{
//     const id = req.params.id;
//     Blog.findById(id);

//     .then((result)=>{
//         res.redirect('/blogs')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }

// blog routes
app.use( blogRoutes);

app.get("/about", (request, response) => {
    response.render("about", { title: "About" });
});
