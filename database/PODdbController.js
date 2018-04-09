const electron = require('electron');
const sqlite3 = require('sqlite3').verbose();

const path = require('path');
const url = require('url');

let db_path = '/home/rsf5/IdeaProjects/ProductOrderDirection/PODdatabase/';


let db = new sqlite3.Database(db_path+'POD_dbfile.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('SQLiteTestDB Connected');
});

initalizeDatabase();

function initalizeDatabase() {

    var sql_t1,sql_t2,sql_t3,sql_t4,sql_t5;

    sql_t1 =    'CREATE TABLE user_info (' +
                ' user_id integer PRIMARY KEY AUTOINCREMENT,' +
                ' username text NOT NULL,' +
                ' password text NOT NULL,' +
                ' permissions integer NOT NULL' +
                ');';

    sql_t2 =    'CREATE TABLE inventory (' +
                ' item_id integer PRIMARY KEY AUTOINCREMENT,' +
                ' item_name text,' +
                ' item_price real,' +
                ' public_item_id integer NOT NULL,' +
                ' manufacturer text,' +
                ' number_in_stock integer NOT NULL ' +
                ');';

    sql_t3 =    'CREATE TABLE order_history (' +
                ' order_hist_id integer PRIMARY KEY AUTOINCREMENT,' +
                ' order_id integer,' +
                ' user_id integer,' +
                ' date_time text ' +
                ');';

    sql_t4 =    'CREATE TABLE orders (' +
                ' order_id integer PRIMARY KEY AUTOINCREMENT,' +
                ' user_id integer NOT NULL,' +
                ' item_id integer NOT NULL ' +
                ');';

    sql_t5 =    'CREATE TABLE tags (' +
                ' tag_id integer PRIMARY KEY AUTOINCREMENT,' +
                ' tag_name text NOT NULL,' +
                ' item_id integer NOT NULL ' +
                ');';

    //console.log(sql_t1);

    exectueSQLstmt(sql_t1);
    exectueSQLstmt(sql_t2);
    exectueSQLstmt(sql_t3);
    exectueSQLstmt(sql_t4);
    exectueSQLstmt(sql_t5);

}

function insertUser(username,password,permissions) {
    let userInsertSql = 'INSERT INTO user_info (username,password,permissions)\n'+
                        ' VALUES\n'+
                        '('+ '"'+username+'"' +','+ '"'+password+'"' +','+ permissions +');'
}

function insertInventory(itemName,itemPrice,itemId,manufacturer,numInStock) {

}

function exectueSQLstmt(stmt) {

    db.run(stmt)

}