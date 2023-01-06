const puppeteer = require('puppeteer');
async function startBrowser() {
    let browser;
    try {
        // Viewport && Window size 
        width = width
        height = height

        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            headless: false,
            args: ["--disable-setuid-sandbox",
                  "--ignoreHTTPSErrors",
                "--disable-web-security",
                '--no-sandbox',
                '--disable-features=IsolateOrigins,site-per-process,AudioServiceOutOfProcess',
                `--window-size=${width},${height}`,
                '--enable-features=NetworkService',
                "--proxy-server='direct://'",
                '--proxy-bypass-list=*',

                // '--disable-accelerated-2d-canvas',
                // '--no-zygote',
                // '--single-process',
                // '--disable-gpu',

                // '--disable-canvas-aa', // Disable antialiasing on 2d canvas
                // '--disable-2d-canvas-clip-aa', // Disable antialiasing on 2d canvas clips
                // '--disable-gl-drawing-for-tests', // BEST OPTION EVER! Disables GL drawing operations which produce pixel output. With this the GL output will not be correct but tests will run faster.
                // '--disable-dev-shm-usage',
                // '--use-gl=swiftshader', // better cpu usage with --use-gl=desktop rather than --use-gl=swiftshader, still needs more testing.
                // '--enable-webgl',
                // '--hide-scrollbars',
                // '--mute-audio',
                // '--no-first-run',
                // '--disable-infobars',
                // '--disable-breakpad',
                //'--ignore-gpu-blacklist',
                // '--window-size=1280,1024', // see defaultViewport
                // '--user-data-dir=./chromeData', // created in index.js, guess cache folder ends up inside too.
              

            ],
            defaultViewport: null,

            // slowMo: 40
        });
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
    return browser;
}
module.exports = {
    startBrowser
};