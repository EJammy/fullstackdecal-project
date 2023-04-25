const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");
const auth = require('../middleware/auth');

router.get('/list', auth, async (req, res) => {
    try {
      // TODO
      //const { username, email, password, classes } = req.body;
      const user = await User.findById(req.user.id);
      res.json(user.classes);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

//POST
router.post("/add", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      //res.json(user);
      if (user.classes.indexOf(req.body.item) == -1) {
        user.classes.push(req.body.item);
        user.save();
        res.json(user.classes);
      }
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });

  //DELETE
  router.put("/delete", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      //res.json(user);
    
      //res.json.log(itemIndex);
      if (user.classes.indexOf(req.body.item) != -1) {
        user.classes.splice(user.classes.indexOf(req.body.item), 1);
        user.save();
        res.json(user.classes);
      }
    //await user.classes.deleteOne(req.body.item);
    //user.save();
    //res.json(user.classes);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });

  module.exports = router;

