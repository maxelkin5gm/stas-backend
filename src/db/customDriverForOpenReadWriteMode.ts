const sqlite3 = require('sqlite3')

class Database extends sqlite3.Database {
    constructor(databasePath: string, callback: any) {
        super(databasePath, sqlite3.OPEN_READWRITE, callback)
    }
}

export const customDriverForOpenReadWriteMode = {
    verbose() {
        return this;
    },
    Database
}