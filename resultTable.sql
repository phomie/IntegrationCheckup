DROP TABLE IF EXISTS jsonresults;
DROP TABLE IF EXISTS vastresults;


CREATE TABLE jsonresults(
id SERIAL PRIMARY KEY,
created_at   Timestamp  DEFAULT CURRENT_TIMESTAMP,
slots jsonb,
atf_channel jsonb,
contentTyp jsonb,
adunitstructure jsonb
);

CREATE TABLE vastresults(
id SERIAL PRIMARY KEY,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
vast_result TEXT

);