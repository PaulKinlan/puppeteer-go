const puppeteer = require('puppeteer');

const go = (url, func, options, auth) => {
  return puppeteer.launch(options).then(async browser => {
    const page = await browser.newPage();

    if (auth && auth.username && auth.password) {
      await page.authenticate({
        username: auth.username,
        password: auth.password,
      })
    }

    await page.goto(url, { waitUntil: 'networkidle2' });
    const data = await func(page, browser);
    await browser.close();
    return data;
  });
}

module.exports = {
  go
}