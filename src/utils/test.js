function search(item) {
    for (var i = 0; i < item.length; i++) {
        for (const [key, value] of Object.entries(item[i])) {
            thobjecttofind = `${key}: ${value}`
            atf_channel = `${key}: ${value}`
                // console.log('atf_channel', atf_channel);
            if (atf_channel == "atf-channel") {
                console.log("sayyes")
            }

            if (thobjecttofind === ("atf-contentType: homepage") && atf_channel == "atf-channel") {

                console.log("heureka")
                return { thobjecttofind } + { atf_channel }
            } else if (thobjecttofind === ("atf-contentType: channel")) {
                console.log("heureka")
                return thobjecttofind

            } else if (thobjecttofind === ("atf-contentType: article")) {
                console.log("heureka")
                return "{" + thobjecttofind + "}"

            }

        }
    }
}
search(dataLayer)



function findObjectByKey(array, key) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key]) {
            return array[i];
        }
    }
    return null;

}
theatf = "atf-contentTyp"
findObjectByKey(dataLayer, theatf)


function findObjectByKey(array, key) {

    for (var i = 0; i < array.length; i++) {
        if (array[i][key]) {
            return array[i];
        }
    }
    return null;

}
theatf = "atf-contentType"
findObjectByKey(dataLayer, theatf)







function getNames() {
    for (var i = 0; i < dataLayer.length; i++) {
        for (const [key, value] of Object.entries(dataLayer[i])) {
            af_channel
            // get names from the database or API
            let firstName = 'John',
                lastName = 'Doe';

            // return values
            return {
                firstName,
                lastName
            };
        }
    }
}






for (var i = 0; i < dataLayer.length; i++) {
    for (const [key, value] of Object.entries(dataLayer[i])) {
        thobjecttofind = `${key}: ${value}`
            //  console.log('thobjecttofind', thobjecttofind);
        if (thobjecttofind === ("atf-contentType: homepage")) {

            console.log("heureka")
            return { thobjecttofind }
        } else if (thobjecttofind === ("atf-contentType: channel")) {
            console.log("heureka")
            return thobjecttofind

        } else if (thobjecttofind === ("atf-contentType: article")) {
            console.log("heureka")
            return "{" + thobjecttofind + "}"

        }

    }
}




var spawn = require('child_process').spawn;
if (app.killed === undefined) {
    app.killed = true;
    if (process.env.process_restarting) {
        delete process.env.process_restarting;
        // Give old process one second to shut down before continuing ...
        setTimeout(main, 1000);
        return;
    }
    spawn(process.argv[0], process.argv.slice(1), {
        env: { process_restarting: 1 },
        stdio: 'ignore',
        detached: true
    }).unref();
}




atf_channel = await page.evaluate(async() => {

    try {
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









for (const [key, value] of Object.entries(dataLayer)) {
    console.log(`${key}: ${value}`);
}


const fs = require("fs")
const path = require('path')
const { inspect, util } = require('util');
//const {parse, stringify} = require('flatted');
var stringify = require('json-stringify-safe');

//const JASON = require("JASON");
const tocheckthepath = require("../../public/jason/url_copy.json")
let dirToUrl = path.join(__dirname, '../../public/jason/url_copy.json');

function readit(callback) {
    fs.readFile(dirToUrl, 'utf-8', function(err, data) {
        if (err) {
            return console.error(err);
        }
        return data
    });
}

readit((err, data) => {
    const requestedUrl = JSON.parse(data)
    const url = new URL(requestedUrl.url)
    this.url = url.href
    scraperObject.url = this.url;

})

fs.writeFile(urlDir, JSON.stringify(thejsonurl), 'utf8', function(err) {
    if (err) {
        return console.log(err);
    }
    fs.readFile(urlDir, 'utf-8', function(err, data) {
        if (err)
            return console.error(err);

    });
    console.log("The url is delivered to the json file ");
});

theformsscreen = document.querySelector("#screanchoise")

let adSlotObj = {};
const result = {};

const element = document.querySelectorAll("atf-ad-slot");
console.log('result', result);
for (var i = 0; i < element.length; i++) {
    //element[i].querySelectorAll('*').forEach(d => d.remove());
    adSlotObj[i] = element[i].outerHTML.split("<")[0];
    result["Adslots"] = adSlotObj;
}


let adadunitObj = {};
let result = {};
console.log('result', result);
const element = document.querySelectorAll("div[id^='google_ads_iframe_']");
for (var i = 0; i < element.length; i++) {
    adadunitObj[i] = element[i].outerHTML.split(">")[0];
    result = adadunitObj;

}


function findObjectByKey(array, key) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key]) {
            return array[i];
        }
    }
    return null;
}
theatf = "atf-channel"
objToAnalyse = findObjectByKey(dataLayer, theatf);

if (objToAnalyse) {
    findObjectByKey(dataLayer, theatf)
} else {
    function GetAdKeyValue(object) {
        document.querySelector('atf-ad-slot').getAttribute("atf-contenttype")
    }
    GetAdKeyValue()
}





topSlotArr = []
console.log('topSlotArr', topSlotArr);

adsobjects = googletag.pubads().getSlots();

adsobjects.forEach(function(item) {
    console.log('item', item);
    var adslotSizes = item.getSizes();
    if (item.getAdUnitPath().includes('vertical')) {
        console.log('item.getAdUnitPath().includes(vertical)', item.getAdUnitPath().includes('vertical'));
        if (item.getAdUnitPath().includes('vertical')) {
            console.log("weird")
        }

        console.log("insiudethetop")
        thecollected = []
        console.log('thecollected', thecollected);
        thesize = [];
        console.log('thesize', thesize);

        for (key of adslotSizes) {
            console.log('adslotSizes', adslotSizes);
            console.log('key', key);
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


if (atf_channel == null) {
    atf_channel = await page.evaluate(async() => {
        thechannel = atf.getChannel()

        return thechannel

    })
    console.log('atf_channel afters', atf_channel);

}



for (key of datalayer) {
    const objEntries = Object.entries(key);
    console.log('objEntries', objEntries);

}

obj = dataLayer
const loopNestedObj = obj => {
    Object.entries(obj).forEach(([key, val]) => {
        if (val && typeof val === "object") {
            console.log('val', val);
            console.log('loopNestedObj(val)', loopNestedObj(val));



        } else {
            console.log("this is the key and value ", key, val);

        }
    });
};

obj = dataLayer

const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

        console.log(`keylwedkölwef: ${key}, valuewerwerwr: ${obj[key]}`)

        if (typeof obj[key] === 'object') {
            /*    iterate(obj[key]) */
            console.log('iterate(obj[key])', /* iterate(obj[key]) */ );
        }
    })
}



console.log('obj', obj);
for (const [key, value] of Object.entries(obj)) {
    console.log('[key, value]', [key, value]);


    console.log(`${key}: ${value}`);



}


try {

} catch (e) {
    // Anweisungen für jeden Fehler
    logMyErrors(e); // Fehler-Objekt an die Error-Funktion geben
}


/* 

 */

/* contentTyp = await page.evaluate(async() => {
            try {
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


 */
https: //www.onvista.de/



    #round2 {
        display: block;
        position: absolute;
        top: 50 % ;
        left: 50 % ;
        height: 50 px;
        width: 50 px;
        margin: -25 px 0 0 - 25 px; -
        webkit - animation: round2 - rotate 3.0 s infinite linear;
        animation: round2 - rotate 3.0 s infinite linear;
    }

#
round2 span {
    width: 30 px;
    height: 30 px;
    display: inline - block;
    position: absolute;
    top: 0;
    background - color: #0057e7;
    -webkit-animation: round2-bounce 2.0s infinite ease-in-out;
            animation: round2-bounce 2.0s infinite ease-in-out;
  }
  
  # round2 span: nth - child(2) {
            top: auto;
            bottom: 0;
            background: #008744;
    -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
  }
  
  @-webkit-keyframes round2-rotate {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @keyframes round2-rotate {
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
  }
  @-webkit-keyframes round2-bounce {
    0%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  @keyframes round2-bounce {
    0%, 100% {
      -webkit-transform: scale(0);
              transform: scale(0);
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }