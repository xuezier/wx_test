'use strict';
const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser());

app.use(function(req, res, next) {
  console.log(req.headers);
  next();
});

const notify_url = 'http://wxtest.tlifang.com/wxqrcodepay';
const redirect_uri = 'http://wxtest.tlifang.com/redirect';

const WX = require('ym-modules').wx;
const wx = new WX(require('./WXCONFIG.json'));

app.get('/openid_url', function(req, res) {
  let uri = wx.getOpenId(redirect_uri);
  res.send(uri);
});

app.get('/redirect', function(req, res) {
  console.log('query', req.query);
  console.log('body', req.body);
  res.end('heheda');
});

app.listen(5000);
