const app = require("express")();

const someData = [
  {
    id: 1,
    name: "Sean Grey",
    age: 24
  },
  {
    id: 2,
    name: "John Doe",
    age: 26
  },
  {
    id: 3,
    name: "Janet Dane",
    age: 19
  }
];

app.get("/", (req, res) => {
  return res.status(200).send(someData);
});

app.get("/:id", (req, res) => {
  if (someData[req.params.id]) {
    return res.status(200).send(someData[req.params.id]);
  } else {
    return res.status(404).send({ message: "Missing" });
  }
});

app.listen(3000, () => {
  console.log("ready");
});

module.exports = app;
