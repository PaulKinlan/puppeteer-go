const puppeteer = require('puppeteer');

const go = (url, func) => {
  return puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    await func(page, browser);
    await browser.close();
  });
}

module.exports = {
  go
}