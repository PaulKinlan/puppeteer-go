const puppeteer = require('puppeteer');

const go = (url, func, options) => {
  return puppeteer.launch(options).then(async browser => {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const data = await func(page, browser);
    await browser.close();
    return data;
  });
}

module.exports = {
  go
}