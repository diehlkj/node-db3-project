const knex = require('knex'); // Importing knex

const config = require('../knexfile.js'); // importing our knex config file

const db = knex(config.development); // initializing an instance of knex with our development parameters located in our config file

module.exports = db; // exporting our knex instance as db