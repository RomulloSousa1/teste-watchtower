import express from "express";
const app = express();

app.get("/", (req, res) => {
  const name = "World";
  res.send(`Hello ${name}!`);
});

const port = parseInt("3000");
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
