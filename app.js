/*
 * @Author: ecitlm 
 * @Date: 2017-12-06 16:20:03 
 * @Last Modified by: ecitlm
 * @Last Modified time: 2018-03-25 19:57:20
 */
const express = require('express')
const http = require('http')
const app = express()
const router = express.Router()
const filter = require('./utils/filter_sign')
const path = require('path')
var routes = require('./routes/index');

app.set('views', path.join(__dirname, 'views/web'));
app.set('view engine', 'ejs');
app.locals.staticPath = '/spider';
routes.init(app, app.locals.staticPath);
app.use(app.locals.staticPath, express.static(path.join(__dirname, 'public'))); // 设置静态资源地址
app.use('/docs', express.static('docs')); // 设置静态资源地址
app.all('*', function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    next()
})


app.use(router)
module.exports = app