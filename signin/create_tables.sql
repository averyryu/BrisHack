CREATE DATABASE IF NOT EXISTS `TheraGo` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE TheraGo;


    CREATE TABLE IF NOT EXISTS User(
        customerID INT PRIMARY KEY AUTO_INCREMENT,
        firstname VARCHAR(255),
        lastname VARCHAR(255),
        age INT
    );

    CREATE TABLE IF NOT EXISTS UserLogin(
        loginID INT PRIMARY KEY AUTO_INCREMENT,
        username VARCHAR(255),
        hashpwd VARCHAR(255),
        customerID INT,
        FOREIGN KEY (customerID) REFERENCES User (customerID),
        loginTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );