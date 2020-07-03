const { go } = require('../index.js'); //require('puppeteer-go');

(async (url) => { 
  const text = await go(url, async (page) => {
    return await page.title();
  });

  console.log(text);
})('https://paul.kinlan.me');