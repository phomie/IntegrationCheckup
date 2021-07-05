const mysecrectid = require("./utils/pageScraper")
const spicedPG = require("spiced-pg");
var dbUrl =

    process.env.DATABASE_URL ||
    "postgres://postgres:try2begood@localhost:5432/integrationcheck";


const db = spicedPG(dbUrl);


const resultsData = (findtheright, togetthehost, atf_sdk, slots, atf_channel, contentTyp, adunitstructure, adcallnizer) => {
    return db.query(
        "INSERT INTO jsonresults ( findtheright,togetthehost,atf_sdk,slots,atf_channel,contentTyp,adunitstructure,adcallnizer) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id; ", [findtheright, togetthehost, atf_sdk, slots, atf_channel, contentTyp, adunitstructure, adcallnizer]
    );
};

const resultsVastData = (vast_result) => {
    return db.query(
        "INSERT INTO vastresults ( vast_result) VALUES ($1) RETURNING id; ", [vast_result]
    );
};

exports.lastEntry = (findtheright) => {

    return db.query(
        //"SELECT created_at, slots, atf_channel, contentTyp, adunitstructure FROM jsonresults ORDER BY created_at DESC LIMIT 1"
        //"SELECT * FROM jsonresults WHERE date_trunc('second', created_at) = findtheright ;"
        //  "LOCK jsonresults in ACCESS EXCLUSIVE MODE;",
        //"SELECT * FROM jsonresults WHERE id=(select max(id) from jsonresults) ;"
        "SELECT * FROM jsonresults WHERE findtheright= $1;", [findtheright]
        //"SELECT $1 FROM $2", ['*', 'jsonresults']
    )
}


exports.resultsData = resultsData;
exports.resultsVastData = resultsVastData