const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const github = require('./github_server');
const axios = require('axios');

const TOKEN = '354365aabd97d9472db5fa967b41c4e18d8b4e52';
const org_hooks_url = `https://api.github.com/orgs/organization-prototype/hooks?access_token=${TOKEN}`;

const newHook = {
  "name": "web",
  "active": true,
  "events": [],
  "config": {
    "url": "https://bfzoskjbmx.localtunnel.me/payload",
    "content_type": "json"
  }
}

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/getHooks', (req, res) => {
  axios.get(org_hooks_url)
  .then(data => res.json(data.data))
  .catch(err => console.log('error'));
});

app.post('/createHook', (req, res) => {
  newHook.events.push(req.body.value);
  axios.post(org_hooks_url, newHook)
  .then(data => res.json(data))
  .catch(err => console.log('error'));
});

app.listen(3000, () => {
  console.log('express server listening on localhost:3000')
  github.listen();
});
