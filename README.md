Puppeteer Go
============

Just a simple API to script puppeteer, all it does is load a URL and then let you run a function against the page once it has loaded. 

That is all.

Usage
-----

1. Install

`npm i puppeteer-go`

2. Include

`const {go} = require('puppeteer-go');`

3. Use

``` JavaScript
/*
 page - the Page instance returned from puppeteer
 browser - the Browser instance returned from puppeteer

*/
const callback = (page, browser) { ... };

go(url, callback)


```
Why does this exist?
--------------------

I like building little scripts to automate actions on the web with puppeteer but I kept forgetting the stanza to start a session, browser to a page ... that and my fingers kept getting tired.

Examples
--------

1. Screenshotting elements on a page

```JavaScript
const {go} = require('puppeteer-go');

go('https://paul.kinlan.me', async (page) => {
    const elements = await page.$$("h1");
    let count = 0;
    for(let element of elements) {
      try {
        await element.screenshot({ path: `${count++}.png`});
      } catch (err) {
        console.log(count, err);
      }
    }
});
```
