CREATE DATABASE localmarket;
use localmarket;

CREATE TABLE user (
    id INT PRIMARY KEY auto_increment,
    accountname VARCHAR(255),
    accountpassword VARCHAR(255),
    created_at TIMESTAMP,
    email VARCHAR(255),
    userrole VARCHAR(255)
);

CREATE TABLE items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT,
    fields JSON,
    image TEXT,
    isused TINYINT,
    price VARCHAR(255),
    quantity INT,
    title VARCHAR(255),
    userid INT,
    categId INT,
    created_at TIMESTAMP default current_timestamp,
    FOREIGN KEY (userid) REFERENCES user(id),
    FOREIGN KEY (categId) REFERENCES categories(id)
);

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    fields JSON
);

CREATE TABLE checkout (
id INT PRIMARY KEY AUTO_INCREMENT,
    amount DECIMAL(10,2),
    city VARCHAR(50),
    email VARCHAR(100),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    payment_status VARCHAR(20),
    phone VARCHAR(20),
    state VARCHAR(50),
    street VARCHAR(100),
    user_id INT,
    zip VARCHAR(10)
);


CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    itemId INT,
    userId INT,
    created_at TIMESTAMP default current_timestamp,
    FOREIGN KEY (userid) REFERENCES user(id),
    FOREIGN KEY (itemId) REFERENCES items(id)
);

CREATE TABLE placedorders (
    itemId INT PRIMARY KEY,
    userId INT,
    created_at TIMESTAMP default current_timestamp,
    FOREIGN KEY (userId) REFERENCES user(id),
    FOREIGN KEY (itemId) REFERENCES items(id)
);



