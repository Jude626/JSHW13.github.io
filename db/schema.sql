CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(100) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('King Burger', TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Queen Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Prince Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Princess Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Baby Burger', TRUE);