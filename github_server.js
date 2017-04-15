const githubhook = require('githubhook');

const github = githubhook({
  host: 'localhost',
  port: 8082,
  path: '/payload',
  secret: '12345'
});

github.on('issues', (repo, ref, data) => {
  console.log('event!');
});

github.on('issue_comment', (repo, ref, data) => {
  console.log('comment!');
});

github.on('member', (repo, ref, data) => {
  console.log('member!');
});

github.on('membership', (repo, ref, data) => {
  console.log('member!');
});

github.on('team', (repo, ref, data) => {
  console.log('member!');
});

module.exports = github;
