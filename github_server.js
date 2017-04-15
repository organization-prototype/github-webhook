const githubhook = require('githubhook');

const github = githubhook({
  host: 'localhost',
  port: 8082,
  path: '/payload',
  secret: '12345'
});

github.on('*', (event, repo, ref, data) => {
  console.log('event triggered!');
  console.log('event:', event);
});

github.listen();

// module.exports = github;
