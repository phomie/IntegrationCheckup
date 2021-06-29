process.env.TZ = 'Europe/Amsterdam'
const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fs = require("fs");
const bodyParser = require("body-parser");
var multer = require('multer')
    //const tocheckthepath = require("public/jason/scrapeddata")
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




app.use(express.static(publicDir));

app.use(function(req, res, next) {
    res.set({ 'Last-Modified': new Date() });
    next()
});


//SetupHanldebar and views Location
var exphbs = require('express-handlebars')
app.set("view engine", "hbs");
app.set("views", viewpath);
hbs.registerPartials(partialspath);

hbs.registerHelper('json', function(context) {
    return JSON.stringify(context);
});



app.post('/results', upload.single('userSearchInput', 'screensizes'), async function(req, res) {

    var url = req.body.userSearchInput;
    var screenssizes = req.body.screensizes
    var sizes = screenssizes.split("x")
    width = sizes[0]
    height = sizes[1]
    console.log('height', height);


    try {
        findtheright = Math.floor(Math.random() * 1000000000 + 1);
        scraperObject.findtheright = findtheright
        scraperObject.url = url;
        let browserInstance = browserObject.startBrowser();
        browserObject.width = width
        browserObject.height = height
        await scraperController(browserInstance)


    } catch (e) {
        console.log("Cant't stop webserver:", 'error');
        console.log(e, 'error');
    }

    db.lastEntry(findtheright).then(result => {

        res.send(result.rows.map(row => {
            console.log('row', row);
            return {
                ...row,
                created_at: new Date(row.created_at).toLocaleString('en', { timeZone: 'Europe/Berlin' })
                    //findtheright: new Date(row.findtheright).toLocaleString('en', { timeZone: 'Europe/Berlin' })
            }
        }))
    })
});

/* app.get("/resultsofScrap", (req, res) => {
    db.lastEntry().then(result => {
        res.send(result.rows.map(row => {
            return {
                ...row,
                created_at: new Date(row.created_at).toLocaleString('en', { timeZone: 'Europe/Berlin' })
                    //findtheright: new Date(row.findtheright).toLocaleString('en', { timeZone: 'Europe/Berlin' })
            }
        }))
    })
}); */
app.get("", (req, res) => {
    res.render("index", {
        title: "IntegrationCheck",
        secTitle: "",
        name: "Paste in the URL you are want to check",
        copyright: "adtechfactory",
    });
});

/*

*/
app.get("/weather", (req, res) => {
    if (!req.query.urladdress) {
        return res.send({
            error: "you must provide an adress",
        });
    }
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