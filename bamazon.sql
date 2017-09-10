DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE  products(
    id INT NOT NULL AUTO_INCREMENT,
    item_id INT(20)  NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INT (20),
    stock_quanity INT (50),
    primary key (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (001, 'Dog Toy','dog', 10, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (002, 'Dog Bed','dog', 30, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (003, 'Ball','dog', 5, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (004, 'Dog Food','dog', 30, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (005, 'Dog Treats','dog', 8, 17);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (006, 'Cat Bed','cat', 15, 19);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (007, 'Cat Toy','cat', 5, 34);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (008, 'Cat tree','cat', 50, 9);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (009, 'Cat treats','cat', 10, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
 values (010, 'Cat food','cat', 20, 12);

SELECT * FROM products;