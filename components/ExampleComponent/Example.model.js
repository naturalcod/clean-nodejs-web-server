const DB = require('../../lib/db/models/index');

module.exports = {
    getUsers: async (params) => {

        return await DB.Position.findAll({
            include: [
                {
                    model: DB.User
                }
            ]
        });
    }
}