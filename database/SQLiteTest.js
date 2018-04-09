const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('/home/rsf5/IdeaProjects/FallBackYeah/SQLiteDatabaseBase/test.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('SQLiteTestDB Connected');
});
