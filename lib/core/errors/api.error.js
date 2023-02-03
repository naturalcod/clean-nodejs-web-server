


class ApiError {
    constructor(code, message){
        this.code = code;
        this.message = message;
    }

    static badRequest(message){
        return new ApiError(500, message);
    }

    static nonAuth(message){
        return new ApiError(403, message)
    }
}

module.exports = ApiError;