function search( item){
    for (var i=0; i < item.length; i++) {
        for (const [key, value] of Object.entries(item[i])) {
           thobjecttofind = `${key}: ${value}`
             atf_channel= `${key}: ${value}`
            // console.log('atf_channel', atf_channel);
        if(atf_channel=="atf-channel"){
            console.log("sayyes")
        }
       
           if(thobjecttofind===("atf-contentType: homepage")&&atf_channel=="atf-channel"){

                console.log("heureka")
                return {thobjecttofind} +{atf_channel}
            }else if(thobjecttofind===("atf-contentType: channel")){
                console.log("heureka")
                return thobjecttofind

            }else if(thobjecttofind===("atf-contentType: article")){
                console.log("heureka")
                return "{"+thobjecttofind+"}"

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
    findObjectByKey(dataLayer,theatf)


    function findObjectByKey(array, key) {
       
        for (var i = 0; i < array.length; i++) {
            if (array[i][key]) {
                return array[i];
            }
        }
        return null;

    }
    theatf = "atf-contentType"
findObjectByKey(dataLayer,theatf)







function getNames() {
    for (var i=0; i < dataLayer.length; i++) {
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
   





for (var i=0; i < dataLayer.length; i++) {
    for (const [key, value] of Object.entries(dataLayer[i])) {
       thobjecttofind = `${key}: ${value}`
     //  console.log('thobjecttofind', thobjecttofind);
        if(thobjecttofind===("atf-contentType: homepage")){

            console.log("heureka")
            return {thobjecttofind}
        }else if(thobjecttofind===("atf-contentType: channel")){
            console.log("heureka")
            return thobjecttofind

        }else if(thobjecttofind===("atf-contentType: article")){
            console.log("heureka")
            return "{"+thobjecttofind+"}"

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
    fs.readFile(dirToUrl, 'utf-8', function (err, data) {
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
    if(err) {
        return console.log(err);
    }
    fs.readFile(urlDir, 'utf-8', function (err, data) {
      if (err)
          return console.error(err);
     
  });
    console.log("The url is delivered to the json file ");
});

theformsscreen= document.querySelector("#screanchoise")

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
            result=adadunitObj;
           
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