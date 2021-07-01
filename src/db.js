const mysecrectid = require("./utils/pageScraper")
const spicedPG = require("spiced-pg");
var dbUrl =

    process.env.DATABASE_URL ||
    "postgres://postgres: @localhost:5432/integrationcheck";

console.log('dbUrl', dbUrl);
const db = spicedPG(dbUrl);


const resultsData = (findtheright, togetthehost, atf_sdk, slots, atf_channel, contentTyp, adunitstructure) => {
    return db.query(
        "INSERT INTO jsonresults ( findtheright,togetthehost,atf_sdk,slots,atf_channel,contentTyp,adunitstructure) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id; ", [findtheright, togetthehost, atf_sdk, slots, atf_channel, contentTyp, adunitstructure]
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