const ApiError = require("../errors/api.error");

module.exports = class Controller {
  constructor(req, res) {
    this.req = req;
    this.res = res;
    this.queryParams = {...this.req.query, ...this.req.body, ...this.req.params}
    console.log(this.queryParams)
  }

  async call(name) {
    try {
      let result = await this[name]();
      this.res.json(result);
    } catch (e) {
      if (e instanceof ApiError) {
        this.res.status(e.code);
        this.res.json({ detail: e.message });
      }
    }
  }
};
