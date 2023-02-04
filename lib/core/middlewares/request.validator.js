const validatorSchemes = require("../modules/validators");

const Joi = require("joi");

module.exports = (req, res, next) => {

  

  let queryParams = { ...req.query, ...req.body };

  // Main Scheme
  let schemeRoot =
    validatorSchemes("components")[removeQueryParams(req.originalUrl)];

    

  // Method
  let method = req.method.toUpperCase();

  if (!schemeRoot){
    next();
    return;
  };

  

  // Scheme
  let scheme = schemeRoot[method];

  

  if (!scheme) {
    next();
  } else {
    let options = {
      allowUnknown: true, // Позволяет объекту содержать неизвестные ключи, которые игнорируются
    };

    const { error, value } = scheme.validate(queryParams, options);

    if (error) {
      res.status(422);
      res.json({ error: error.details.map((x) => x.message).join(", ") });
    } else {
      next();
    }
  }
};

function removeQueryParams(string) {
  return string.split("?")[0];
}
