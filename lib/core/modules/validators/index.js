const { readdirSync } = require("fs");

var path = require("path");

// Root Module Шnitializing
module.exports = validator;

function validator(rootPath, app) {

  rootPath = path.normalize(`${process.cwd()}/${rootPath}`);

  let validatorObjects = {};

  for (let i = 0; i < actions.getDirectories(rootPath).length; i++) {
    let ComponentDir = actions.getDirectories(rootPath)[i];

    let ComponentFiles = actions.getFiles([rootPath, ComponentDir]);

    let Validator = ComponentFiles.filter((i) => i.name.includes("validator"));

    if (Validator.length == 0) continue;

    let ValidatorPath = `${rootPath}\\${ComponentDir}\\${Validator[0].name}`;

    validatorObjects = {
        ...validatorObjects,
        ...require(ValidatorPath)
    }
    
  }

  return validatorObjects;

}

const actions = {
  getFiles: function (source = []) {
    let path = source
      .map((i, index) => (index == source.length - 1 ? `${i}` : `${i}//`))
      .join("");
    return readdirSync(path, { withFileTypes: true });
  },
  getDirectories: function (source) {
    return readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  },
};
