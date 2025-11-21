import dotenv from "dotenv/config";
import app from "./app.js";

const port = process.env.PORT;

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running http://localhost:${port}`);
});
