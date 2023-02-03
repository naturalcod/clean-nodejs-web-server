// Метод синхронизирующий базу данных
const sync = require("./lib/db/services/sync");

// Express модуль
const express = require("express");

// Реализация Express
const app = express();

// Синхронизация БД
sync();

module.exports = app;
