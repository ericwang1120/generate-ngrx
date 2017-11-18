const get = require('lodash.get');
const finder = require('find-package-json');
const pjson = finder().next().value;
const path = require('path');
const pkgDir = require('pkg-dir');
const fs = require('fs');

const featureReducerPath = path.resolve(loadPathFromConfig('baseNgrxPath'), 'ngrxModule', 'reducers');

const rootReducerPath = loadPathFromConfig('rootReducerPath') !== path.resolve(process.cwd(), '.') ?
    loadPathFromConfig('rootReducerPath') : path.resolve(process.cwd(), 'index.ts');
const reducerUtilsPath = path.resolve(rootReducerPath, '..', 'utils.ts');

/**
 * root reducer need to be imported into the index.ts of feature reducer,
 * so relative path need to be figured out
 */
const featureToRootReducerPath = path
    .relative(featureReducerPath, rootReducerPath)
    .replace('.ts', '')
    .replace(/\\/g, '/');

const moduleToNgrxPath = path
    .relative(loadPathFromConfig('pagesFolder'), loadPathFromConfig('baseNgrxPath'))
    .replace(/\\/g, '/');

const envToRootReducerPath = path
    .relative(path.resolve(rootReducerPath, '..'), path.resolve(pkgDir.sync(process.cwd()), './src/environments/environment'))
    .replace(/\\/g, '/');

module.exports = {
    pagesFolder: loadPathFromConfig('pagesFolder'),
    baseNgrxPath: loadPathFromConfig('baseNgrxPath'),
    rootReducerPath: rootReducerPath,
    reducerUtilsPath: reducerUtilsPath,
    rootStateExisted: fs.existsSync(rootReducerPath),
    reducerUtilsExisted: fs.existsSync(reducerUtilsPath),
    featureToRootReducerPath: featureToRootReducerPath,
    moduleToNgrxPath: moduleToNgrxPath,
    envToRootReducerPath, envToRootReducerPath
}

// get configured path from package.json
function loadPathFromConfig(propertyName) {
    let property = `genNgrx.${propertyName}`;
    if (get(pjson, property)) {
        return path.resolve(pkgDir.sync(process.cwd()), get(pjson, property));
    }
    return path.resolve(process.cwd(), '.');
}

console.log(envToRootReducerPath);