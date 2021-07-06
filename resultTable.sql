DROP TABLE IF EXISTS jsonresults;

CREATE TABLE jsonresults(
id SERIAL PRIMARY KEY,
created_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
findtheright INTEGER NOT NULL UNIQUE,
togetthehost  VARCHAR NOT NULL,
atf_sdk BOOLEAN NOT NULL,
slots jsonb,
atf_channel jsonb,
contentTyp jsonb,
adcallnizer jsonb
);

DROP TABLE IF EXISTS vastresults;
CREATE TABLE vastresults(
id SERIAL PRIMARY KEY,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
vast_result TEXT
);