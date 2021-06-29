const fetch = require("node-fetch");
const path = require('path');
let baseDir = path.join(__dirname, '../../public/jason/vast.txt');
const fs = require('fs');
const db = require("../db.js");




const scraperObject = {
    url: "freundin.de",
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

        const atf_sdk = await page.evaluate(async() => {
            await atf
            console.log("SDK_loaded")
            return true
        });
        console.log('atf_sdk', typeof(atf_sdk));

        //*** dataLayerProof****************************************************
        atf_channel = await page.evaluate(async() => {
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
            } else { // Try to ask for sdk initialization
                async function GetAdKeyValue(object) {
                    return document.querySelectorAll('atf-ad-slot')[1].getAttribute("atf-channel")
                }

                if (GetAdKeyValue()) {
                    return GetAdKeyValue()
                } else {
                    thereturn = await atf.getChannel()
                    return thereturn;
                }

            }

        });
        console.log('atf_channel', atf_channel);
        if (atf_channel == null) {
            atf_channel = await page.evaluate(async() => {
                thechannel = atf.getChannel()
                return thechannel

            })
            console.log('atf_channel afters', atf_channel);

        }

        contentTyp = await page.evaluate(async() => {

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


        if (contentTyp == null) {
            contentTyp = await page.evaluate(async() => {
                thechannel = atf.getContentType()
                return thechannel

            })
            console.log('atf_channel afters', atf_channel);

        }

        //*** ADUNITSTRUCTUR_PROOF **********************************************
        await page.$("div[id^='google_ads_iframe_'] iframe").then(() => {
            console.log("iframe found")

        })

        const adunitstructure = await page.evaluate(async() => {
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
        console.log('theAdunit', adunitstructure);
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
                        }).then(function(vast_result) {
                            //-----------------DB-Func-------------------------------------------
                            db.resultsVastData(vast_result)
                            fs.writeFile(baseDir, vast_result, function(err) {
                                if (err) {
                                    return console.log(err);
                                }
                                console.log("The data has been scraped and saved successfully! View it at '../jason/vast.txt'");
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

        console.log('dataLayer2', contentTyp);
        console.log('dataLayer', atf_channel);
        console.log('theAdunit', adunitstructure);

        findtheright = this.findtheright
        console.log('findtherightcontentTyp', findtheright);
        contentTyp1 = JSON.stringify(contentTyp)
        atf_channel1 = JSON.stringify(atf_channel)
            //-----------------DB-Func-------------------------------------------
        await db.resultsData(findtheright, togetthehost, atf_sdk, slots, atf_channel1, contentTyp1, adunitstructure)



        //-----------------------------------------------------------------------

        // scrapedData.push({ atf_channel }, { contentTyp }, slots, { adunitstructure });

        async function scrapeCurrentPage() {
            await page.close();
            return scrapedData;
        }
        let data = await scrapeCurrentPage();
        return data;
    },
};

module.exports = scraperObject;