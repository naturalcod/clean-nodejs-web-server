const Controller = require("../../lib/core/classes/controlles")
const ApiError = require("../../lib/core/errors/api.error")
const { getUsers } = require("./Position.model")

module.exports = class Position extends Controller {
    constructor(req,res){
        super(req,res)
    }

    async getPositions(){
            
            let users = await getUsers(this.queryParams);
            return users;
        
    }
}