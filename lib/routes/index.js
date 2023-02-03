

// Коллекция всех корневых маршрутов приложения



const RootRoutes = [
  {
    path: "/Positions",
    router: require("../../components/Positions/Position.routes"),
    authorization: {
        mode: 'full',
        exceptions: [
            '/Positions/Login'
        ]
    }
  },
];

const AuthMiddleware = require('../core/middlewares/auth')(RootRoutes)

module.exports.RootRoutesInit = (app) => {

  for (let i = 0; i < RootRoutes.length; i++) {

    let route = RootRoutes[i];

    
    app.use(route.path, [AuthMiddleware], route.router);

  }
};


module.exports.RootRoutes = RootRoutes;
