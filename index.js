import express from "express";
const app = express();

app.get("/", (req, res) => {
<<<<<<< HEAD
  const name = process.env.NAME || "World";
  res.send(`Hello ${name}!`);
=======
  res.send("Hello World 52!");
>>>>>>> 2b41d6613daede0b1cf6213e927501b3ffd32626
});

const port = parseInt(process.env.PORT || "3000");
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
