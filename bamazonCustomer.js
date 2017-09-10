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
const table = require('cli-table')

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


//=======================connect to DB======================
connection.connect(function(err){
    if (err) throw err;
    //run starting function
    displayItems();
});

//================display Items for sale===================
function displayItems() {
    connection.query("SELECT * FROM auctions", function (err, res) {
        if (err) {
            console.log(err)
        }
        ;
        // Create Table
        var tableDisplay = new table({
            head: ['ID #', 'Product', 'Department', 'Price', 'Qty'],
            colWidths: [10, 30, 20, 10, 10]
        });

        //Grab rows from DB and place them into table
        for (var i = 0; i < res.length; i++) {
            tableDisplay.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i]stock_quanity]);
        }
        console.log(tableDisplay.toString());
        selectItems();
    });

}

//======================Prompt User what to Purchase=================

