const DB = require('../../lib/db/models/index');

module.exports = {
    getExample: async (params) => {

        return [
            {
                name: 'Example'
            },
            {
                name: 'Tesing'
            }
        ]
    }
}