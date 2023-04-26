const express = require("express");
 const user = require("./routes/user");
 const reviews = require("./routes/reviews");
 const classes = require("./routes/classes");
 const InitiateMongoServer = require("./config/db");

const cors = require('cors')

 //Initiate Mongo Server
 InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 1234;

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

// /**
//  * Router Middleware
//  * Router - /user/*
//  * Method - *
//  */

app.use("/user", user);
app.use("/reviews", reviews);
app.use("/classes", classes);
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
