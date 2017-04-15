const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

const github = require('express-github-webhook');

const TOKEN = 'ffc5b82342d50bae557d0d8bfd62e3075747a215';

const webhook = github({
  path: '/payload',
  secret: '12345'
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(webhook);

webhook.on('membership', (repo, data) => {
  console.log('--------EVENT---------');

  console.log('member added:', data.member.login);

  const input = {
    ref: `refs/heads/${data.member.login}`,
    sha: '777aca1faa0c57107a952303fb02b66f11eaa4a5'
  }

  axios.post(`https://api.github.com/repos/organization-prototype/github-webhook/git/refs?access_token=${TOKEN}`, input)
  .then(data => console.log(data.data));
});

app.listen(3000, () => {
  console.log('express server listening on localhost:3000')
});
