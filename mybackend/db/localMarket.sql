CREATE DATABASE localMarket;
USE localMarket;
CREATE TABLE user
(
id INT AUTO_INCREMENT PRIMARY KEY,
accountname varchar(255),
email varchar(255),
accountpassword varchar(255),
userrole varchar(255),
created_at timestamp default current_timestamp
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    fields JSON NOT NULL  
);
INSERT INTO categories (name, fields) VALUES 
('HandiCraft', 
 '[{"name": "Worktype", "options": ["Sindhi", "Balochi", "Peshawari"]}]');
INSERT INTO categories (name, fields) VALUES 
('Cloths', 
 '[{"name": "Gender", "options": ["Male", "Femlae", "Kids"]}]');

INSERT INTO categories (name, fields) VALUES 
('Furniture', 
 '[{"name": "Condition", "options": ["Old", "New"]}]');

CREATE TABLE items
(
id  int auto_increment PRIMARY KEY,
title varchar(255),
description text,
price varchar(255),
fields JSON NOT NULL,
isused tinyint,
userid int not null,
image text not null,
foreign key (userid) references user(id),
created_at timestamp default current_timestamp
)
SELECT * FROM items WHERE id=1


