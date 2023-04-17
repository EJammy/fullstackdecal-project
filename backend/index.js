const express = require("express");

const app = express();

const port = process.env.PORT || 4000;
app.use(express.json());

// TODO: Use CORS??

app.get("/", (req, res) => {
    res.json({ message: "API Working" });
});

app.use("/user", require("./routes/user"))

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
