//display all of the items available for sale

// prompt users with two messages.
    //ask them the ID of the product they would like to buy.
    //ask how many units of the product they would like to buy.

//Check inventory
    //Insufficient quantity!

//Else fullfill order
    //update SQL database
    //show total cost
//+++++++++++++++++++++++++++++++++++++++++++++++

//requirements
const inquirer = required('inquirer');
const mysql = require("mysql");
const fs = require('fs');

//===================create connection==================
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    //userName
    user:'root',

    //Paasword
    password: '13Wolfdragon',
    database: 'bamazon_DB'
});
//===================Global Variables======================
const cart = [];
const total = 0;

//================display Items for sale===================
//connect to DB
connection,connect(function(err){
    if (err) throw err;
    //run starting function
    displayItems();
});

function displayItems() {
    
}