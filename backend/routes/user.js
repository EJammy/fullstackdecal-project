const router = require("express").Router();

router.get("/login", (req, res) => {
    res.json({ message: "API Working" });
})

router.get("/signup", (req, res) => {
})

module.exports = router
