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
      //const { username, email, password, comments } = req.body;
      const user = await User.findById(req.user.id);
      res.json(user.comments);
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
  });

//POST
router.post("/add", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      //res.json(user);
      if (user.comments.indexOf(req.body.item) == -1) {
        user.comments.push(req.body.item);
        user.save();
        res.json(user.comments);
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
      if (user.comments.indexOf(req.body.item) != -1) {
        user.comments.splice(user.comments.indexOf(req.body.item), 1);
        user.save();
        res.json(user.comments);
      }
    //await user.comments.deleteOne(req.body.item);
    //user.save();
    //res.json(user.comments);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });

  module.exports = router;

