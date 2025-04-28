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


CREATE TABLE checkout (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    street VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    zip VARCHAR(20),
    amount DECIMAL(10, 2),
    payment_status VARCHAR(50) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
