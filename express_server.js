const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');

const github = require('express-github-webhook');

const TOKEN = '751029e4ac2d678082afdfa5a3cfa58fd591b644';

const webhook = github({
  path: '/webhook',
  secret: 'ilovetesting'
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(webhook);

webhook.on('membership', (repo, data) => {
  console.log('hello');
  // console.log('--------EVENT---------');

  // console.log('member added:', data.member.login);

  // const input = {
  //   ref: `refs/heads/${data.member.login}`,
  //   sha: '777aca1faa0c57107a952303fb02b66f11eaa4a5'
  // }

  // axios.post(`https://api.github.com/repos/CodesmithLLC/precourse-part-1/git/refs?access_token=${TOKEN}`, input)
  // .then(data => console.log(data.data));
});

app.listen(3000, () => {
  console.log('express server listening on localhost:3000')
});
