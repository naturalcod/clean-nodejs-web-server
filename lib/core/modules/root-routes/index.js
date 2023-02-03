const { readdirSync } = require("fs");

var path = require("path");

// Root Module Шnitializing
module.exports = init;

function init(rootPath, app){

    {
    
        rootPath = path.normalize(`${process.cwd()}/${rootPath}`);
      
        let dir = actions.getDirectories(rootPath);
      
        for (let i = 0; i < dir.length; i++) {
      
          let ComponentDir = dir[i];
      
          let ComponentFiles = actions.getFiles(`${rootPath}\\${ComponentDir}`);
      
          let Router = ComponentFiles.filter((i) => i.name.includes("routes"));
      
          if (Router.length == 0) continue;
      
          let routerPath = `/${Router[0].name.split(".")[0]}`;
      
          app.use(routerPath, require(`${rootPath}\\${ComponentDir}\\${Router[0].name}`));
        }
    };
}

const actions = {
  getFiles: function (source) {
    return readdirSync(source, { withFileTypes: true });
  },
  getDirectories: function (source) {
    return readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  },
};
