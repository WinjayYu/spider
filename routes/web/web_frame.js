var express = require('express');
var router = express.Router();
const myajax = require('../../utils/axios_render')

router.get('/', (req, res, next) => {
  myajax
    .get('api/web_frame', {})
    .then((response) => {
      res.render('web_frame', {
        data: response['data'],
        title: '前端框架'
      })
    })
    .catch (err => {
      res.render('err');
    })
})

module.exports = router;