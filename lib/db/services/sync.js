const DB = require('../models/index');


module.exports = () => {

    return new Promise((res,rej) => {
        DB.sequelize.sync().then(_ => {
            res();
        });
    })
    
    
}