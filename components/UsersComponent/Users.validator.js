const Joi = require("joi");	 

module.exports = {
    "/Users/Login": {
        GET: Joi.object({
            login: Joi.string().required().messages({
              'string.base' : 'Логин должен быть строкой',
              'any.required' : 'Не указан логин',
            }), 
            password: Joi.string().required(), // Пароль  - обязательная строка
          }),
      },
}