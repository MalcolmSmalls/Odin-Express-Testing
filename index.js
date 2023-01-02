const express = require("express");
const index = express.Router();

const  aray = [];

index.get("/", (req, res) => {
	res.json({ name: "frodo" });
});

index.get("/text", (req, res) => res.json({ array }));

index.post("/test", (req, res) => {
	array.push(req.body.item);
	res.send('success!');
});

module.exports = index;