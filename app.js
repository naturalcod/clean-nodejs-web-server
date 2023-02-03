

// Метод синхронизирующий базу данных
const sync = require('./lib/db/services/sync');

// Express модуль
const express = require("express");
const associations = require('./lib/db/services/associations');

// Реализация Express
const app = express();

// Ассоциации
associations();



// Синхронизация БД
sync()














    
    

    








module.exports = app;



