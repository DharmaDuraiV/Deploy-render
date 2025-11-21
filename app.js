import express from "express";
import fs from "node:fs";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("I am from Home Page");
});

app.get("/api/v1/products", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    const parseData = JSON.parse(data);
    if (err) throw err;
    res.status(200).json({ status: "success", products: { parseData } });
  });
});
export default app;
