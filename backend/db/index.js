const { Database } = require("@forbidden_duck/super-mongo");
const collections = require("./collections");
const schemas = require("./schemas");

module.exports = new Database("mongo-web-app", [
    collections.ips,
    collections.refresh_tokens,
    collections.users,
    collections.saveddbs,
]);

module.exports.collections = collections;

module.exports.schemas = schemas;
