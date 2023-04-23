const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const Class = require("../models/Class")

const fs = require('fs');

// Parses course list from a json file in the disk
// written with the help of chatGPT
fs.readFile('courseList.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Do something with the JSON data
  for (const className in jsonData) {
    let c = Class.findOne({
      name: className,
    });
    let description = jsonData[className];
    if (description == null) {
      description = "n/a";
    }
    console.log(className, description);
    let newClass = new Class({ name: className, professor: "n/a", description: description});
    newClass.save();
  }
});


// TODO: class api

module.exports = router
