const pageScraper = require('./pageScraper');
const path = require('path')
let baseDir = path.join(__dirname, '../../public/jason/scrapeddata.json');

const fs = require('fs');
async function scrapeAll(browserInstance) {
    let browser;
    try {
        browser = await browserInstance;
        let scrapedData = {};

        // Call the scraper for different set of books to be scraped
        scrapedData['Checked_Elements'] = await pageScraper.scraper(browser, 'Checked_Elements');
        //scrapedData['HistoricalFiction'] = await pageScraper.scraper(browser, 'Historical Fiction');
        //scrapedData['Mystery'] = await pageScraper.scraper(browser, 'Mystery');
        await browser.close();
        fs.writeFile(baseDir, JSON.stringify({ scrapedData }, null, '\t'), 'utf8', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log("The data has been scraped and saved successfully! View it at '../jason/bookdata.json'");
        });
    } catch (err) {
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)