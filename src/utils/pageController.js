const pageScraper = require('./pageScraper');
const path = require('path')
let baseDir = path.join(__dirname, '../../public/jason/scrapeddata.json');
const db = require("../db.js");
const fs = require('fs');
async function scrapeAll(browserInstance) {
    let browser;
    try {
        browser = await browserInstance;
        let scrapedData = {};
        scrapedData['Checked_Elements'] = await pageScraper.scraper(browser, 'Checked_Elements');
        await browser.close();
    } catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)