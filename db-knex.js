const createKnex = require('knex');

const {DATABASE_URL} = require('./config');

let knex = null;

function dbConnect() {
    knex = createKnex({
        client: 'pg',
        connection: DATABASE_URL
    });
}

function dbDisconnect() {
    return knex.destroy();
}

function dbGet() {
    return knex;
}

module.exports = {
    dbConnect,
    dbDisconnect,
    dbGet
};
