CREATE DATABASE localMarket;
USE localMarket;
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  accountname VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),  
  userrole VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE categories (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,  -- Category name (e.g., Electronics, Furniture, etc.)
     fields JSON NOT NULL  -- JSON to store dynamic fields such as brand, language, size, etc.
 )

CREATE TABLE items (
     id INT AUTO_INCREMENT PRIMARY KEY,
     title VARCHAR(255) NOT NULL,  -- Product title (e.g., Smartphone X10)
     description TEXT NOT NULL,  -- Product description
     price VARCHAR(255) NOT NULL,  -- Product price as VARCHAR (could also use DECIMAL)
     fields JSON NOT NULL,  -- JSON to store product-specific fields (e.g., brand, language)
     isused TINYINT NOT NULL,  -- Used (1) or new (0)
     userid INT NOT NULL,  -- ID of the user who added the item
     image TEXT NOT NULL,  -- URL to the product image
     categId INT NOT NULL,  -- Foreign key linking to the categories table
     quantity INT NOT NULL,  -- Available stock quantity
     FOREIGN KEY (userid) REFERENCES user(id),  -- User reference (assuming there's a users table)
     FOREIGN KEY (categId) REFERENCES categories(id),  -- Category reference
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Auto-generated timestamp
 )

INSERT INTO categories (name, fields) VALUES 
 ('Electronics', 
  '[{"name": "Brand", "options": ["Brand A", "Brand B", "Brand C"]}, 
    {"name": "Model", "options": ["Model 1", "Model 2", "Model 3"]}, 
    {"name": "Color", "options": ["Black", "White", "Silver", "Gray"]}, 
    {"name": "Warranty", "options": ["1 Year", "2 Years", "3 Years"]}, 
    {"name": "Specifications", "options": ["Storage", "Screen Size", "Battery Life", "Processor Speed"]}]')	

INSERT INTO categories (name, fields) VALUES 
 ('Cosmetics', 
  '[{"name": "Type", "options": ["Skincare", "Makeup", "Fragrance", "Haircare"]}, 
    {"name": "Brand", "options": ["Brand A", "Brand B", "Brand C"]}, 
    {"name": "Skin Type", "options": ["Dry", "Oily", "Combination", "Sensitive"]},
    {"name": "Shade", "options": ["Light", "Medium", "Dark"]}]')

INSERT INTO categories (name, fields) VALUES 
 ('Furniture', 
  '[{"name": "Condition", "options": ["Old", "New"]}]')


INSERT INTO categories (name, fields) VALUES 
 ('Cloths', 
  '[{"name": "Gender", "options": ["Male", "Female", "Kids"]}]')


INSERT INTO categories (name, fields) VALUES 
 ('HandiCraft', 
  '[{"name": "Worktype", "options": ["Sindhi", "Balochi", "Peshawari"]}]')

INSERT INTO items (title, description, price, fields, isused, userid, image, categId, quantity)
 VALUES 
 ('Smartphone X10', 'High performance smartphone with extended battery life.', '25000', '{"Brand":"Lenovo","Language":"English"}', 0, 1, 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg', 1, 10),
 ('Air Cooler Pro', 'Silent operation and quick cooling.', '8000', '{"Brand":"Dawlance","Language":"Urdu"}', 1, 2, 'https://cdn.pixabay.com/photo/2012/10/25/12/02/fan-62782_1280.jpg', 2, 15),
 ('HP Laptop 15s', 'Reliable laptop for work and play.', '65000', '{"Brand":"HP","Language":"English"}', 0, 3, 'https://cdn.pixabay.com/photo/2017/02/25/02/32/b-w-2096808_1280.jpg', 3, 5),
 ('Bluetooth Speaker', 'Compact speaker with great sound.', '3000', '{"Brand":"Lenovo","Language":"Spanish"}', 1, 1, 'https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg', 1, 20),
 ('LED TV 40 Inch', 'Crystal clear display, energy efficient.', '35000', '{"Brand":"Dawlance","Language":"English"}', 0, 2, 'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_1280.jpg', 2, 8),
 ('Washing Machine', 'Top load, automatic.', '28000', '{"Brand":"Dawlance","Language":"Urdu"}', 1, 3, 'https://cdn.pixabay.com/photo/2020/04/25/08/44/washing-machine-5089939_640.jpg', 2, 12)	6 row(s) affected


-- CREATE TABLE products (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   title VARCHAR(255) NOT NULL,                  -- Product Name
--   description TEXT NOT NULL,                    -- Product Description
--   price DECIMAL(10,2) NOT NULL,                 -- Product Price (use DECIMAL for accuracy)
--   fields JSON NOT NULL,                         -- JSON field for dynamic attributes like size
--   isused TINYINT(1) NOT NULL DEFAULT 0,         -- 0 = New, 1 = Used
--   userid INT NOT NULL,                          -- Foreign key to users
--   image TEXT NOT NULL,                          -- Image path or URL
--   categId INT NOT NULL,                         -- Foreign key to categories
--   quantity INT NOT NULL DEFAULT 0,              -- Stock quantity
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

--   FOREIGN KEY (userid) REFERENCES user(id),
--   FOREIGN KEY (categId) REFERENCES categories(id)
-- );







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
 '[{"name": "Gender", "options": ["Male", "Female", "Kids"]}]');

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


INSERT INTO items (title, description, price, fields, isused, userid, image)
VALUES 
('Smartphone X10', 'High performance smartphone with extended battery life.', '25000', '{"Brand":"Lenovo","language":"english"}', 0, 1, 'https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg'),
('Air Cooler Pro', 'Silent operation and quick cooling.', '8000', '{"Brand":"Dawlance","language":"urdu"}', 1, 2, 'https://cdn.pixabay.com/photo/2012/10/25/12/02/fan-62782_1280.jpg'),
('HP Laptop 15s', 'Reliable laptop for work and play.', '65000', '{"Brand":"hp","language":"english"}', 0, 3, 'https://cdn.pixabay.com/photo/2017/02/25/02/32/b-w-2096808_1280.jpg'),
('Bluetooth Speaker', 'Compact speaker with great sound.', '3000', '{"Brand":"Lenovo","language":"spanish"}', 1, 1, 'https://cdn.pixabay.com/photo/2019/04/07/09/41/speakers-4109274_1280.jpg'),
('LED TV 40 Inch', 'Crystal clear display, energy efficient.', '35000', '{"Brand":"Dawlance","language":"english"}', 0, 2, 'https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_1280.jpg'),
('Washing Machine', 'Top load, automatic.', '28000', '{"Brand":"Dawlance","language":"urdu"}', 1, 3, 'https://cdn.pixabay.com/photo/2020/04/25/08/44/washing-machine-5089939_640.jpg'),
('Gaming Mouse', 'Ergonomic design with RGB lights.', '2000', '{"Brand":"hp","language":"english"}', 0, 1, 'https://via.placeholder.com/150'),
('Smart Watch', 'Health tracking with notifications.', '5000', '{"Brand":"Lenovo","language":"spanish"}', 1, 2, 'https://via.placeholder.com/150'),
('Tablet Z7', 'Entertainment on the go.', '15000', '{"Brand":"hp","language":"urdu"}', 0, 3, 'https://via.placeholder.com/150'),
('Hair Dryer', 'Fast drying and foldable.', '1800', '{"Brand":"Dawlance","language":"english"}', 1, 1, 'https://via.placeholder.com/150'),
('Power Bank 20000mAh', 'Fast charging support.', '2200', '{"Brand":"Lenovo","language":"spanish"}', 0, 2, 'https://via.placeholder.com/150'),
('Microwave Oven', 'Auto-cook menu options.', '9000', '{"Brand":"Dawlance","language":"urdu"}', 1, 3, 'https://via.placeholder.com/150'),
('Electric Kettle', 'Boils water in seconds.', '1200', '{"Brand":"hp","language":"english"}', 0, 1, 'https://via.placeholder.com/150'),
('Router AX3000', 'Fast and stable internet.', '6000', '{"Brand":"hp","language":"english"}', 0, 2, 'https://via.placeholder.com/150'),
('Keyboard Combo', 'Wireless keyboard and mouse.', '2400', '{"Brand":"Lenovo","language":"english"}', 1, 3, 'https://via.placeholder.com/150'),
('USB Flash Drive', '64GB high-speed storage.', '1000', '{"Brand":"hp","language":"urdu"}', 0, 1, 'https://via.placeholder.com/150'),
('Blender Machine', 'Make smoothies easily.', '3500', '{"Brand":"Dawlance","language":"english"}', 1, 2, 'https://via.placeholder.com/150'),
('Laptop Cooling Pad', 'Extra fans for cool usage.', '1800', '{"Brand":"Lenovo","language":"english"}', 0, 3, 'https://via.placeholder.com/150'),
('Electric Shaver', 'Smooth shave every time.', '3000', '{"Brand":"hp","language":"spanish"}', 1, 1, 'https://via.placeholder.com/150'),
('Camera DSLR', 'Perfect shots with clarity.', '85000', '{"Brand":"hp","language":"english"}', 0, 2, 'https://via.placeholder.com/150'),
('Iron Press', 'Quick heat with steam function.', '2200', '{"Brand":"Dawlance","language":"urdu"}', 1, 3, 'https://via.placeholder.com/150'),
('Security Camera', 'Monitor your home remotely.', '4000', '{"Brand":"Lenovo","language":"english"}', 0, 1, 'https://via.placeholder.com/150'),
('Electric Heater', 'Stay warm in winter.', '3500', '{"Brand":"Dawlance","language":"spanish"}', 1, 2, 'https://via.placeholder.com/150'),
('VR Headset', 'Immersive gaming experience.', '7000', '{"Brand":"Lenovo","language":"english"}', 0, 3, 'https://via.placeholder.com/150'),
('Mobile Tripod', 'Capture stable photos.', '1500', '{"Brand":"hp","language":"english"}', 1, 1, 'https://via.placeholder.com/150'),
('LED Bulb Pack', 'Energy-saving bulbs.', '1000', '{"Brand":"Dawlance","language":"urdu"}', 0, 2, 'https://via.placeholder.com/150'),
('Cordless Phone', 'Long battery life.', '2500', '{"Brand":"Lenovo","language":"english"}', 1, 3, 'https://via.placeholder.com/150'),
('Smart Plug', 'Control devices remotely.', '1800', '{"Brand":"hp","language":"spanish"}', 0, 1, 'https://via.placeholder.com/150'),
('Digital Clock', 'Modern design with alarm.', '1200', '{"Brand":"Dawlance","language":"english"}', 1, 2, 'https://via.placeholder.com/150'),
('Electric Drill', 'For all home repairs.', '4000', '{"Brand":"Lenovo","language":"urdu"}', 0, 3, 'https://via.placeholder.com/150');

-- CREATE TABLE checkout (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id INT,
--   first_name VARCHAR(100),
--   last_name VARCHAR(100),
--   email VARCHAR(255),
--   phone VARCHAR(20),
--   street VARCHAR(255),
--   city VARCHAR(100),
--   state VARCHAR(100),
--   zip VARCHAR(20),
--   amount DECIMAL(10, 2),
--   payment_status VARCHAR(20) DEFAULT 'Pending',
--   transaction_id VARCHAR(100),
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );
SELECT * FROM checkout WHERE email = 'ali@gmail.com';

