CREATE DATABASE movieList;

USE movieList;

CREATE TABLE Movies (
    title VARCHAR(255) PRIMARY KEY,
    watched BOOLEAN
);
INSERT INTO Movies (title, watched) VALUES ('Mean Girls', false),('Hackers', false),('The Grey', false),('Sunshine', false),('Ex Machina', false);

