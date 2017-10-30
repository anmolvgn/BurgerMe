CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burgerInput(
    Burger_Id INT NOT NULL,
    Burger_Name VARCHAR(100) NOT NULL,
    TIMESTAMP NOT NULL,
    PRIMARY KEY (Burger_Id)
);

CREATE TABLE DevouredBurgers(
    Burger_Id INT NOT NULL,
    Burger_Name VARCHAR(100) NOT NULL,
    TIMESTAMP INT(4) NOT NULL
    PRIMARY KEY(Burger_Id)
);