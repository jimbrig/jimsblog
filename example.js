// example.js
const MLoader = require('medium-poster');
const token = process.env.MEDIUM_TOKEN;

(async () => {
  await MLoader.postArticlesByConfig(token);
})()

// It will post md or html file to Medium base on your config
