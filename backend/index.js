const express = require("express");
 const user = require("./routes/user");
 const comments = require("./routes/comments");
 const reviews = require("./routes/reviews");
 const InitiateMongoServer = require("./config/db");
const classes = require("./routes/class")

 //Initiate Mongo Server
 InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 1234;

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *
//  */

app.use("/user", user);
app.use("/comments", comments);
app.use("/reviews", reviews);
app.use("/class", classes);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
