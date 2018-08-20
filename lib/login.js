const express = require('express');

const router = express.Router();

// const mongoose = require('mongoose');

// const Login  = require('../lib/login.js');

/* GET USER AND LOGIN */


/* router.get('/', function(req, res, next) {
  login.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
}); */
router.get('/', (req, res) => {
  res.send('login page');
});

module.exports = router;

