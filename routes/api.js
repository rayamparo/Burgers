let express = require('express');
let burger = require('../models/burger');

let router = express.Router();

router.get("/burgers", (req, res) => {
  burger.all((data) => {
    res.json(data);
  })
}); 

router.post("/burgers", function(req, res) {
  burger.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put('/burgers/:id', (req, res) => {
  burger.update({ devoured: true }, `id = ${req.params.id}`, (result) => {
    if(result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;