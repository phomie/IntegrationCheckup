const spicedPG = require("spiced-pg");
var dbUrl =
    process.env.DATABASE_URL ||
    "postgres:d500650:d500650@localhost:5432/integrationcheck";
const db = spicedPG(dbUrl);


const resultsData = (slots, atf_channel, contentTyp, adunitstructure) => {
    return db.query(
        "INSERT INTO jsonresults ( slots,atf_channel,contentTyp,adunitstructure) VALUES ($1,$2,$3,$4) RETURNING id; ", [slots, atf_channel, contentTyp, adunitstructure]
    );
};

const resultsVastData = (vast_result) => {
    return db.query(
        "INSERT INTO vastresults ( vast_result) VALUES ($1) RETURNING id; ", [vast_result]
    );
};

exports.lastEntry = () => {
    return db.query(
        "SELECT created_at, slots, atf_channel, contentTyp, adunitstructure FROM jsonresults ORDER BY created_at DESC LIMIT 1"
    )
}


exports.resultsData = resultsData;
exports.resultsVastData = resultsVastData