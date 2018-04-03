'use strict';
var express = require('express');
const router = express.Router();
const myajax = require('../../utils/axios_render')

router.get('/', (req, res, next) => {
  myajax
    .get('api/huaban', {})
    .then((response) => {
      res.render('home', {
        data: response['data']
      })
    })
    .catch (err => {
      res.render('err');
    })
})

module.exports = router;

