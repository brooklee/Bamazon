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
const key = require('./keys.js');
//requirements
const inquirer = require('inquirer');
const mysql = require("mysql");
const table = require('cli-table')

//===================create connection==================
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    //userName
    user:'root',

    //Paasword
    password: key,
    database: 'bamazon_DB'
});


//=======================connect to DB======================
connection.connect(function(err){
    if (err) throw err;
    //run starting function
    displayItems();
});

//================display Items for sale===================
function displayItems() {
    connection.query("SELECT * FROM products", function (err, res) {
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
            tableDisplay.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quanity]);
        }
        console.log(tableDisplay.toString());
        selectItems();
    });

}

//======================Prompt User what to Purchase=================
function selectItems() {

    inquirer
        .prompt([
            {
                name: 'ID',
                type: 'input',
                messsage: 'Please input the number of the Item you would like to purchase'
            },
            {
                name: 'QTY',
                type: 'input',
                message: 'How many would you like to buy?'
            },
    ]).then(function (answers) {
        var wantedQty = answers.QTY;
        var wantedID = answers.ID;
        purchased(wantedID, wantedQty);
    });
    
};

//=========================Check Inventory===============================
function purchased(ID, neededQty) {
    conection.query('SELECT * FROM products WHERE item_id = ' + ID, function (err, res) {
        if (err) {console.log(err)};
        //in stock
        if (neededQty <= res[0].stock_quanity) {
            var total = res[0].price * neededQty;
            // console log the good news
            console.log("Hoora! your purchase was a success");
            // console log total
            console.log("Item: " + res[0].product_name + "Quanity: " + neededQty + "Total: " + total)
            // minus product from DB
            connection.query('UPDATE products SET stock_quanity = stock_quanity - ' + neededQty + ' WHERE item_id = ' + ID);
        } else {
            console.log("Sorry we are out of that Item")
        };
        displayItems();
    });
}