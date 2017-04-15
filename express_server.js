const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

const github = require('express-github-webhook');

const webhook = github({
  path: '/payload',
  secret: '12345'
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(webhook);

webhook.on('membership', (event, repo, data) => {

});

app.listen(3000, () => {
  console.log('express server listening on localhost:3000')
});
