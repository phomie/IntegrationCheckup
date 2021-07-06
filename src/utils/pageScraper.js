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

        const response = await page.goto(this.url, { waitUntil: 'networkidle2' });



        var togetthehost = this.url
        const { hostname } = new URL(togetthehost)
        await page.setDefaultTimeout(0);

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

        await page.waitForFunction(() => 'atf' in window).then(async() => {
            console.log("atf is really loaded")


        })
        const atf_sdk = await page.evaluate(async() => {
            await atf
            return true

        });
        console.log('atf_sdk', atf_sdk);


        //*** ADslots****************************************************
        const slots = await page.evaluate(async() => {

            try {

                let adSlotObj = {};
                const result = {};
                const element = document.querySelectorAll("atf-ad-slot");

                for (var i = 0; i < element.length; i++) {
                    //element[i].querySelectorAll('*').forEach(d => d.remove());
                    adSlotObj[i] = element[i].outerHTML.split(">")[0];
                    result["Adslots"] = adSlotObj;
                }

                return result;

            } catch (e) {

                logMyErrors(e);
                return "there is something wrong with the adslots"
            }

        });



        //*** dataLayerProof****************************************************

        atf_channel = await page.evaluate(async() => {

            try {
                function findObjectByKey(array, key) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i][key]) {
                            return array[i];
                        }
                    }
                    return "there is something wrong with the atf Channel";
                }
                theatf = "atf-channel";
                objToAnalyse = findObjectByKey(dataLayer, theatf);

                if (objToAnalyse) {
                    return findObjectByKey(dataLayer, theatf)
                } else {
                    async function GetAdKeyValue(object) {
                        return document.querySelectorAll('atf-ad-slot')[1].getAttribute("atf-channel")
                    }
                    if (GetAdKeyValue()) {
                        return GetAdKeyValue()
                    } else {
                        thereturn = "ksdjfosdjfiojsdoijfijosf" /*  await atf.getChannel() */
                        return thereturn;
                    }

                }
            } catch (e) {

                logMyErrors(e);
                return "there is something wrong with the atf Channel"
            }



        });
        console.log('atf_channel', atf_channel);
        if (atf_channel == null || thehost == "netdoktor") {
            atf_channel = await page.evaluate(async() => {
                thechannel = dataLayer[1].page.content.bcn.channel

                return thechannel

            })
        }

        contentTyp = await page.evaluate(async() => {
            try {
                function findObjectByKey(array, key) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i][key]) {
                            return array[i];
                        }
                    }
                    return "there is something wrong with the atf Contenttype";
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

            } catch (e) {

                logMyErrors(e);
                return "there is something wrong with the atf Channel"
            }


        });

        if (contentTyp == null || thehost == "netdoktor") {
            contentTyp = await page.evaluate(async() => {
                await atf
                thecontenttype = dataLayer[1].page.content.bcn.contentType
                return thecontenttype

            })


        }
        console.log('contentTyppageevaluate', contentTyp);






        //*** ADUNITSTRUCTUR_PROOF **********************************************
        await page.waitForSelector("div[id^='google_ads_iframe_'] iframe", { visible: true }).then(() => {
            console.log("iframe found")

        })



        //*** adcallnizer****************************************************

        await page.waitForFunction(() => 'googletag' in window).then(async() => {
            console.log("googletag_also-Loaded")
                //  await googletag.pubads().getSlots()

        });

        const adcallnizer = await page.evaluate(async() => {

            await googletag.pubadsReady
            console.log("googletag_also_also-Loaded")
                //adsobjects = googletag.pubads().getSlots();


            topSlotArr = []
            console.log('topSlotArr', topSlotArr);

            adsobjects = googletag.pubads().getSlots();


            adsobjects.forEach(function(item) {
                var adslotSizes = item.getSizes();

                if (item.getAdUnitPath().includes('top')) {
                    thecollected = []
                    thesize = [];
                    for (key of adslotSizes) {
                        const objEntries = Object.entries(key);
                        thekeys = Object.fromEntries(objEntries)
                        values = Object.values(thekeys)
                        valurstring = JSON.stringify(values)
                        valurstring1 = valurstring.slice(1, -1)
                        valurstring2 = valurstring1.replace(",", "x")
                        thesize.push(valurstring2)
                    }
                    thsizetostring = JSON.stringify(thesize).slice(1, -1)
                    thsizetostring1 = thsizetostring.replace(/"/g, "")
                    thecollected.push(item.getAdUnitPath(), thsizetostring1)

                }

                if (item.getAdUnitPath().includes('vertical_1') || item.getAdUnitPath().includes('vertical')) {
                    thecollected = []
                    thesize = [];

                    for (key of adslotSizes) {
                        const objEntries = Object.entries(key);
                        thekeys = Object.fromEntries(objEntries)
                        values = Object.values(thekeys)
                        valurstring = JSON.stringify(values)
                        valurstring1 = valurstring.slice(1, -1)
                        valurstring2 = valurstring1.replace(",", "x")
                        thesize.push(valurstring2)
                    }
                    thsizetostring = JSON.stringify(thesize).slice(1, -1)
                    thsizetostring1 = thsizetostring.replace(/"/g, "")
                    thecollected.push(item.getAdUnitPath(), thsizetostring1)

                }
                if (item.getAdUnitPath().includes('content_1')) {
                    thecollected = []
                    thesize = [];

                    for (key of adslotSizes) {
                        const objEntries = Object.entries(key);
                        thekeys = Object.fromEntries(objEntries)
                        values = Object.values(thekeys)
                        valurstring = JSON.stringify(values)
                        valurstring1 = valurstring.slice(1, -1)
                        valurstring2 = valurstring1.replace(",", "x")
                        thesize.push(valurstring2)
                    }
                    thsizetostring = JSON.stringify(thesize).slice(1, -1)
                    thsizetostring1 = thsizetostring.replace(/"/g, "")
                    thecollected.push(item.getAdUnitPath(), thsizetostring1)

                }
                if (item.getAdUnitPath().includes('content_2')) {
                    thecollected = []
                    thesize = [];

                    for (key of adslotSizes) {
                        const objEntries = Object.entries(key);
                        thekeys = Object.fromEntries(objEntries)
                        values = Object.values(thekeys)
                        valurstring = JSON.stringify(values)
                        valurstring1 = valurstring.slice(1, -1)
                        valurstring2 = valurstring1.replace(",", "x")
                        thesize.push(valurstring2)
                    }
                    thsizetostring = JSON.stringify(thesize).slice(1, -1)
                    thsizetostring1 = thsizetostring.replace(/"/g, "")
                    thecollected.push(item.getAdUnitPath(), thsizetostring1)

                }
                if (item.getAdUnitPath().includes('footer')) {
                    thecollected = []
                    thesize = [];

                    for (key of adslotSizes) {
                        const objEntries = Object.entries(key);
                        thekeys = Object.fromEntries(objEntries)
                        values = Object.values(thekeys)
                        valurstring = JSON.stringify(values)
                        valurstring1 = valurstring.slice(1, -1)
                        valurstring2 = valurstring1.replace(",", "x")
                        thesize.push(valurstring2)
                    }
                    thsizetostring = JSON.stringify(thesize).slice(1, -1)
                    thsizetostring1 = thsizetostring.replace(/"/g, "")
                    thecollected.push(item.getAdUnitPath(), thsizetostring1)

                }

                topSlotArr.push(thecollected)
            })

            return topSlotArr;

        });
        console.log('googletag', adcallnizer)



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

        } catch (error) {
            console.log('error', error);

        }


        console.log('dataLayer2', contentTyp);
        console.log('dataLayer', atf_channel);
        /*  console.log('theAdunit', adunitstructure); */

        findtheright = this.findtheright
        console.log('findtherightcontentTyp', findtheright);
        contentTyp1 = JSON.stringify(contentTyp)
        atf_channel1 = JSON.stringify(atf_channel)
            //-----------------DB-Func-------------------------------------------
        await db.resultsData(findtheright, togetthehost, atf_sdk, slots, atf_channel1, contentTyp1, /* adunitstructure */ { adcallnizer })

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