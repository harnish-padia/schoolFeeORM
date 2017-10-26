"use strict"

var cfg = require('./knexfile.js');
var knex = require('knex')(cfg.development);

module.exports = knex;