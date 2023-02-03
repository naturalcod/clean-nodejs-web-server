const { readdirSync } = require('fs');



// Коллекция всех корневых маршрутов приложения

let UsersRoute = require("../../components/UsersComponent/Users.routes");

module.exports.RootRoutesInit = async (app) => {

  
  // Get All Components
  let dir = getDirectories('./components')

  // Routes auto collector

  for(let i = 0; i < dir.length; i++){

    let ComponentDir = dir[i];

    let ComponentFiles = getFiles(`./components/${ComponentDir}`)

    let Router = ComponentFiles.filter(i => i.name.includes('routes'));

    if(Router.length == 0) continue;

    app.use(`/${Router[0].name.split('.')[0]}`,  UsersRoute);

  }

  
};



const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)


    const getFiles = source =>
    readdirSync(source, { withFileTypes: true })
      // .filter(dirent => dirent.isDirectory())
      // .map(dirent => dirent.name)