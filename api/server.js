const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome",
  });
});

server.get("/hobbits", (req, res) => {
  Hobbits.getAll()
    .then(hobbits => {
      res.status(200).json(hobbits);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/hobbits", (req, res, next) => {
  Hobbits.insert(req.body)
    .then(hobbit => {
      res.status(201).json(hobbit);
    })
    .catch(err => {
      next(err);
    })
})

server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "Something went wrong"
  })
})

module.exports = server;
