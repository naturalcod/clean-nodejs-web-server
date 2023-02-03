const Controller = require("../../lib/core/classes/controllers")


module.exports = class User extends Controller {
    constructor(req,res){
        super(req,res)
    }

    async getUsers(){
            
            return [
                {
                    name: 'Fred'
                },
                {
                    name: 'Eugene'
                }
            ]
        
    }
}