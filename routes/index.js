const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burger.all((data) => {
    const ejsObj = {
      burgers: data
    };
    res.render('burgers', ejsObj);
  })
}); 

module.exports = router;