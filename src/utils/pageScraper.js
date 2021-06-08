const fetch = require("node-fetch");
const path = require('path');
let baseDir = path.join(__dirname, '../../public/jason/vast.txt');
const fs = require('fs');


const scraperObject = {
    url: "",
    async scraper(browser, category) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);

        //await page.tracing.start({  path: "./public/jason/intercepted.json" });
        //var tracing = JSON.parse(await page.tracing.stop());
        //console.log('tracing', tracing);




        const response = await page.goto(this.url, { waitUntil: 'networkidle0' });



        var togetthehost = this.url
        const { hostname } = new URL(togetthehost)
        var thehost = hostname.split(".")[1];
        //await page.setRequestInterception(false);
        if (thehost == "gofeminin") {
            console.log('gofeminin case');
            const thegdprButton = await page.$("div#buttons");
            const thfounbut = await page.waitForSelector("#didomi-notice-agree-button")
            thfounbut.click(console.log("BUTTON_Clicked"));
        } else {
            console.log('else case');

            const thegdprFRame = await page.$("div#gdpr-consent-tool-wrapper iframe");
            const insideframe = await thegdprFRame.contentFrame();
            await insideframe.waitForSelector("#save").then(() => console.log("BUTTON_found"));
            const thebuttontoagree = await insideframe.$("#save");
            thebuttontoagree.click(console.log("BUTTON_Clicked"));
        }


        let scrapedData = [];

        //*** ADslots****************************************************
        const slots = await page.evaluate(async() => {


            let adSlotObj = {};
            const result = {};
            const element = document.querySelectorAll("atf-ad-slot");

            for (var i = 0; i < element.length; i++) {
                //element[i].querySelectorAll('*').forEach(d => d.remove());
                adSlotObj[i] = element[i].outerHTML.split(">")[0];
                result["Adslots"] = adSlotObj;
            }

            return result;
        });

        //*** dataLayerProof****************************************************
        const dataLayer = await page.evaluate(async() => {

            function findObjectByKey(array, key) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][key]) {
                        return array[i];
                    }
                }
                return null;
            }
            theatf = "atf-channel";
            objToAnalyse = findObjectByKey(dataLayer, theatf);

            if (objToAnalyse) {
                return findObjectByKey(dataLayer, theatf)
            } else {
                function GetAdKeyValue(object) {
                    return document.querySelectorAll('atf-ad-slot')[1].getAttribute("atf-channel")
                }
                return GetAdKeyValue()
            }

        });

        const dataLayer2 = await page.evaluate(async() => {


            function findObjectByKey(array, key) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][key]) {
                        return array[i];
                    }
                }
                return null;
            }
            theatf = "atf-contentType";
            objToAnalyse = findObjectByKey(dataLayer, theatf);

            if (objToAnalyse) {
                return findObjectByKey(dataLayer, theatf)
            } else {
                function GetAdKeyValue(object) {
                    return document.querySelectorAll('atf-ad-slot')[1].getAttribute("atf-contenttype")
                }
                return GetAdKeyValue()
            }


        });




        //*** ADUNITSTRUCTUR_PROOF **********************************************
        await page.$("div[id^='google_ads_iframe_'] iframe").then(() => {
            console.log("iframe found")

        })

        const theAdunit = await page.evaluate(async() => {
                let adadunitObj = {};
                console.log('adadunitObj', adadunitObj);
                let result1 = {};
                console.log('result1', result1);

                const element = document.querySelectorAll("div[id^='google_ads_iframe_']");
                for (var i = 0; i < element.length; i++) {
                    adadunitObj[i] = element[i].outerHTML.split(" ")[1];
                    result1 = adadunitObj;
                }

                return result1;
            })
            // console.log('thediv', thediv);
        console.log('theAdunit', theAdunit);
        //VASTCHECK****************************************

        try {
            thevidopla = await page.$("div.item-media__wrapper").then(console.log("vid found"))
            await page.evaluate(() => {
                document.querySelector("div.item-media__wrapper").scrollIntoView({ block: 'start', behavior: 'smooth' });

            })




            await page.on('response', async response => {

                therespo = response.url().endsWith('&format=autoplay')
                if (therespo) {
                    console.log('\n 🚀 We got one!: ', response.url())
                    console.log('header: ', response.status())
                    console.log('header: ', response.headers())
                        // const buffer = await response.buffer();
                    thrUrl = response.url()
                    return theVast = fetch(thrUrl, { "credentials": "include", "headers": { "accept": "application/xml, text/xml, */*; q=0.01", "accept-language": "pl;q=1.3592", "x-requested-with": "XMLHttpRequest" }, "referrerPolicy": "no-referrer-when-downgrade", "body": null, "method": "GET", "mode": "cors" })
                        .then(response => {
                            return response.text();
                        }).then(function(data) {

                            fs.writeFile(baseDir, data, function(err) {
                                if (err) {
                                    return console.log(err);
                                }
                                console.log("The data has been scraped and saved successfully! View it at '../jason/bookdata.json'");
                            });


                            // console.log(data);
                        });

                }

            })


            /* let initialRequest = true;
        await page.setRequestInterception(true);
        page.on('request', request => {
            // cancel any navigation requests after the initial page.goto
            if (request.isNavigationRequest() && !initialRequest) {
                return request.abort();
            }
            initialRequest = false;
            request.continue();
        });
*/
        } catch (error) {
            console.log('error', error);

        }


        // scroll selector into view

        console.log('dataLayer2', dataLayer2);
        console.log('dataLayer', dataLayer);
        //console.log('slots', slots);
        console.log('theAdunit', theAdunit);

        scrapedData.push({ dataLayer }, { dataLayer2 }, slots, { theAdunit });

        async function scrapeCurrentPage() {
            await page.close();
            return scrapedData;
        }
        let data = await scrapeCurrentPage();
        return data;
    },
};

module.exports = scraperObject;