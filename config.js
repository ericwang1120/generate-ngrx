const get = require('lodash.get');
const finder = require('find-package-json');
const pjson = finder().next().value;
const nodePath = require('path');
const pkgDir = require('pkg-dir');
const fs = require('fs');
const indexPath = nodePath.resolve(getPath('ngrx'), 'index.ts');

module.exports = {
    baseNgrxPath: getPath('ngrx'),
    rootStateExisted: fs.existsSync(indexPath)
}

function getPath(type) {
    if (get(pjson, 'genNgrx.baseNgrxPath') && type === 'ngrx') {
        return nodePath.resolve(pkgDir.sync(process.cwd()), get(pjson, 'genNgrx.baseNgrxPath'));
    }
    return nodePath.resolve(process.cwd(), '.');
}
