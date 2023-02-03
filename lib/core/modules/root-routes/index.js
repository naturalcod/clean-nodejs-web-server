const { readdirSync } = require("fs");

var path = require('path');


// Root Module Шnitializing
module.exports = (rootPath, app) => {

    rootPath = path.normalize(`${process.cwd()}/${rootPath}`);

    let dir = actions.getDirectories(rootPath);

    for (let i = 0; i < dir.length; i++) {

        let ComponentDir = dir[i];
    
        let ComponentFiles = actions.getFiles(`${rootPath}\\${ComponentDir}`);
    
        let Router = ComponentFiles.filter((i) => i.name.includes("routes"));
    
        if (Router.length == 0) continue;
    
        let router = require(`${rootPath}\\${ComponentDir}\\${Router[0].name}`);
    
        let routerPath = `/${Router[0].name.split(".")[0]}`;
    
        app.use(routerPath, router);
      }

    

}


const actions = {
    getFiles: (source) => readdirSync(source, { withFileTypes: true }),
    getDirectories: (source) => readdirSync(source, { withFileTypes: true }).filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name)
}