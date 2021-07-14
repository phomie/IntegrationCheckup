const puppeteer = require('puppeteer');
async function startBrowser() {
    let browser;
    try {
        // Viewport && Window size 
        width = width
        height = height

        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            //executablePath: '/Applications/Google Chrome.app',
            headless: true,
            args: ["--disable-setuid-sandbox", "--ignoreHTTPSErrors",
                "--disable-web-security",
                '--no-sandbox',
                '--disable-features=IsolateOrigins,site-per-process',
                `--window-size=${width},${height}`,
                '--enable-features=NetworkService'
            ],
            defaultViewport: null,

            // slowMo: 1500
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}
module.exports = {
    startBrowser
};