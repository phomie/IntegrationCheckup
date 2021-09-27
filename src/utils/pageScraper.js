const fetch = require("node-fetch");
const path = require('path');
let baseDir = path.join(__dirname, '../../public/jason/vast.txt');
const fs = require('fs');
const db = require("../db.js");
const cmpCases = require("./cmpCases")

const scraperObject = {
    url: "freundin.de",
    async scraper(browser, category) {
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        findtheright = this.findtheright
        var togetthehost = this.url
        const { hostname } = new URL(togetthehost)
        var thehost = hostname.split(".")[1];
        const username = ' user';
        const password = 'D8_Esquire_Launch2020!';

        await page.authenticate({ username, password });


        await page.on('response', async res => {

            theliveramp = res.url().endsWith('gdpr-liveramp.js')
            themgmt = res.url().endsWith("wrapperMessagingWithoutDetection.js")
            thedidomi = res.url().endsWith("a8830a15e1c8c6ed99962b90ba595cce47721001.js")
            try {
                if (theliveramp) {
                    console.log('theliveramp');
                    await page.waitForTimeout(5000)
                    const thegdprFRame = await page.$("div[id^='gdpr-consent-tool-wrapper'] iframe");
                    cmpCases.liveramp(thegdprFRame)

                } else if (themgmt) {
                    console.log('themgmt');
                    /*     mgmtstring = 'mgmt'
                        cmp.push(mgmtstring) */
                    await page.waitForTimeout(5000)
                    const thegdprFRame = await page.$("div[id^='sp_message_container'] iframe");
                    cmpCases.mgmt(thegdprFRame)
                } else if (thedidomi) {
                    console.log('didomi');
                    await page.waitForTimeout(5000)
                        /*  didomistring = 'didomi'
                         cmp.push(didomistring) */
                    const thfounbut = await page.waitForSelector("#didomi-notice-agree-button")
                    cmpCases.didomi(thfounbut)
                }
            } catch (error) {
                console.log('error', error);
            }

        })

        const response = await page.goto(this.url, { waitUntil: 'networkidle2' });

        //deleted default timeout

        await page.setDefaultTimeout(30000);

        let scrapedData = [];

        //*** ADslots****************************************************

        await page.waitForSelector("atf-ad-slot", { visible: true }).then(() => {
            console.log("slots found")

        })
        const slots = await page.evaluate(async() => {
            try {

                const element = document.querySelectorAll("atf-ad-slot");
                if (element.length < 1) {
                    console.log('element.length < 1', element.length);
                    let adSlotObj = {};
                    let result = {};
                    adSlotObj = { 0: "There is something wrong with the Adslot Syntax" }
                    result["Adslots"] = adSlotObj;
                    return result;
                } else {
                    let adSlotObj = {};
                    let result = {};

                    for (var i = 0; i < element.length; i++) {
                        //element[i].querySelectorAll('*').forEach(d => d.remove());
                        adSlotObj[i] = element[i].outerHTML;
                        result["Adslots"] = adSlotObj;

                    }
                    return result;
                }


            } catch (e) {

                console.log(e);
                return { 0: "there is something wrong with the adslots" }
            }

        });

        //*** dataLayerProof****************************************************

        async function waitForEvent(eventName, seconds) {
            seconds = seconds || 30;
            // use race to implement a timeout
            return Promise.race([
                // add event listener and wait for event to fire before returning
                page.evaluate(function(eventName) {
                    return new Promise(function(resolve, reject) {
                        document.addEventListener(eventName, function(e) {
                            resolve(); // resolves when the event fires
                        });
                    });
                }, eventName),
                // if the event does not fire within n seconds, exit
                page.waitForTimeout(seconds * 1000)
            ]);
        }
        await waitForEvent('atfSdkInitialized', 10000);
        const atf_sdk = await page.evaluate(async() => {
            try {
                await atf
                return true
            } catch (error) {
                console.log('error', error);
                return false
            }

        });
        console.log('atf_sdk', atf_sdk);



        const atf_channel = await page.evaluate(async() => {

            try {

                await atf.getChannel()
                thereturn = atf.getChannel()
                return thereturn

            } catch (error) {
                console.log('error', error);
                return " something wrong with getChannel() "
            }


        });
        console.log('tryToCheckthefunc', atf_channel);



        const contentTyp = await page.evaluate(async() => {

            try {

                await atf.getContentType()
                thereturn = atf.getContentType();
                return thereturn

            } catch (error) {
                console.log('error', error);
                return " Something wrong with atf.getContentType()"
            }



        });
        console.log('tryToCheckthefunc', contentTyp);

        //*** ADUNITSTRUCTUR_PROOF **********************************************
        /* await page.waitForSelector("div[id^='google_ads_iframe_'] iframe", { visible: true }).then(() => {
            console.log("iframe found")

        })
*/
        //*** adcallnizer****************************************************

        await page.waitForFunction(() => 'googletag' in window).then(async() => {
            console.log("googletag_also-Loaded")
                //  await googletag.pubads().getSlots()

        });

        const adcallnizer = await page.evaluate(async() => {
            try {

                await googletag.pubadsReady
                console.log("googletag_also_also-Loaded")

                topSlotArr = []
                thecollectedTop = []
                thecollectedcontent = []
                thecollectedvertical = []
                thecollectedfooter = []
                adsobjects = googletag.pubads().getSlots();
                adsobjects.forEach(function(item) {
                    var adslotSizes = item.getSizes();
                    thesize = [];
                    if (item.getAdUnitPath().includes("top")) {
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
                        thecollectedTop.push(item.getAdUnitPath(), thsizetostring1)

                    }

                    if (item.getAdUnitPath().includes("content")) {
                        thecontentsize = []
                        thecombinearr = []

                        for (key of adslotSizes) {
                            const objEntries = Object.entries(key);
                            thekeys = Object.fromEntries(objEntries)
                            values = Object.values(thekeys)
                            valurstring = JSON.stringify(values)
                            valurstring1 = valurstring.slice(1, -1)
                            valurstring2 = valurstring1.replace(",", "x")
                            thecontentsize.push(valurstring2)
                        }

                        thsizetostring = JSON.stringify(thecontentsize).slice(1, -1)
                        thsizetostring1 = thsizetostring.replace(/"/g, "")
                        thecombinearr.push(item.getAdUnitPath(), thsizetostring1)
                        thecollectedcontent.push(thecombinearr)
                    }

                    if (item.getAdUnitPath().includes("vertical")) {
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
                        thecollectedvertical.push(item.getAdUnitPath(), thsizetostring1)

                    }
                    if (item.getAdUnitPath().includes("footer")) {
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
                        thecollectedfooter.push(item.getAdUnitPath(), thsizetostring1)

                    }
                })
                topSlotArr.push(thecollectedTop, ...thecollectedcontent, thecollectedvertical, thecollectedfooter)
                return topSlotArr;

            } catch (error) {
                console.log('error', error);
                return [{ 1: "somethingwrongwithadcallnizer" }]
            }


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
    }
};

module.exports = scraperObject;