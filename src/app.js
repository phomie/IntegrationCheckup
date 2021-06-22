process.env.TZ = 'Europe/Amsterdam'
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const bodyParser = require("body-parser");
var multer = require('multer')
const tocheckthepath = require("../public/jason/scrapeddata.json")
var upload = multer({ dest: '../public/jason/url.json' })
const scraperObject = require("./utils/pageScraper")
const browserObject = require('./utils/browser');
const scraperController = require('./utils/pageController');
let dirToJson = path.join(__dirname, '../public/jason/scrapeddata.json');
let pathtorequestfile = path.join(__dirname, '../public/jason/requestfile.json');
const app = express();
const db = require('./db')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//Path to public folders
const publicDir = path.join(__dirname, "../public");
const root_Dir = path.join(__dirname, "../src");

const viewpath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

const thepathtoscrappedjson = path.join(__dirname, "../public/jason/scrapeddata.json");

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function(res, path, stat) {
        Date.prototype.addHours = function(h) {
            this.setHours(this.getHours() + h);
            return this;
        }


        res.set('timestamp', new Date().addHours(2))
    }
}
app.use(express.static(publicDir, options));
//SetupHanldebar and views Location
var exphbs = require('express-handlebars')
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialspath);

hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
});

app.post('/results', upload.single('userSearchInput', 'screensizes'), function(req, res) {

    var url = req.body.userSearchInput;
    var screenssizes = req.body.screensizes
    var sizes = screenssizes.split("x")
    width = sizes[0]
    height = sizes[1]
    console.log('width', width);
    console.log('height', height);
    console.log('item', url);


    try {

        scraperObject.url = url;
        let browserInstance = browserObject.startBrowser();
        browserObject.width = width
        browserObject.height = height
        scraperController(browserInstance)

    } catch (e) {
        console.log("Cant't stop webserver:", 'error'); // No server started
        console.log(e, 'error');
    }

    /*
    db.lastEntry().then(result => {
        res.render("scrapedResults", {

            title: "RESULTS",
            secTitle: "IntegrationCheck",

            result: result.rows
        })

    })*/

});

app.get("", (req, res) => {
    res.render("index", {
        title: "PageScrapper",
        secTitle: "IntegrationCheck",
        name: "Paste in the URL you are want to check, and see the magic happens",
        copyright: "created by the codingod marc",
    });


});


app.get("/resultsofScrap", (req, res) => {
    db.lastEntry().then(result => {
        res.send(result.rows.map(row => {
            return {
                ...row,
                created_at: new Date(row.created_at).toLocaleString('de', { timeZone: 'Europe/Berlin' })
            }
        }))
    })
});
/*
app.get("/resultsofScrap", (req, res) => {
    res.json({ data: new Date() });


});

/*
app.get("/json", (req, res) => {

  if (!req.query.student) {
    return res.send({
      error: "please give me a student",
    });
  }

  //STEP3: READ the file an send it  
  fs.readFile(thepathtojson, (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    
    

    res.send({
      student:student 
    });
  })
})

*/



app.get("/weather", (req, res) => {
    if (!req.query.urladdress) {
        return res.send({
            error: "you must provide an adress",
        });
    }

    /*

  geocode(
    req.query.address,
    (error, { latitutde, longitude, location } = {}) => {
      if (error) {
        return console.log(error);
      }
      forecast(latitutde, longitude, (error, forcastdata) => {
        if (error) {
          return console.log(error);
        }
        res.send({
          forecast: forcastdata,
          location: location,
          address: req.query.address,
        });
      });
    }
  );
*/
    /*
          res.send({
              forecast:forcastdata, 
              location:location,
              address:req.query.address,
      
      
          })*/
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "PageScrapper",
        name: "Marc the coding code is trying to built up an pagescrapper by using pupeteer",
        copyright: "created by the codingcode marc",
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "PageScrapper",
        name: "this could be used to find the correkt wehn you need it ",
        copyright: "created by the codingcode marc",
    });
});
app.get("/help/*", (req, res) => {
    res.render("404Page", {
        title: "404 Page",
        errormessage: "Sorry we couldn't find the Helparticle you  are you looking for",
        copyright: "created by the codingcode marc",
    });
});

app.get("*", (req, res) => {
    res.render("404Page", {
        title: "404 Page",
        errormessage: "Sorry we couldn't find the page you are looking for",
        copyright: "created by the codingcode marc",
    });
});




var webserver = app.listen(3002);