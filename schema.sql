DROP DATABASE IF EXISTS stockfilterdb;
-- Creates the "blogger" database --
CREATE DATABASE stockfilterdb;

use stockfilterdb;

CREATE TABLE Reports (
    id INT AUTO_INCREMENT,
    companyName VARCHAR (70),
    symbol VARCHAR (5),
	stockPrice DECIMAL (18,2),
	finalRatioEvEbit DECIMAL (18,2),
    createdAt VARCHAR (55),
    updatedAt VARCHAR (55),
    PRIMARY KEY(id)
)

select * from Reports;