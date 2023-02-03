

// Коллекция всех корневых маршрутов приложения

let UsersRoute = require("../../components/UsersComponent/Users.routes");

module.exports.RootRoutesInit = (app) => {
  app.use('/Users',  UsersRoute)
};