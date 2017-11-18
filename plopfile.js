const ngrxOnly = require('./ngrx-only.js');
const config = require('./config.js');

module.exports = function (plop) {
	plop.setPartial('featureToRootReducerPath', config.featureToRootReducerPath)
	plop.setPartial('moduleToNgrxPath', config.moduleToNgrxPath)
	plop.setPartial('envToRootReducerPath', config.envToRootReducerPath)
	plop.setGenerator('ngrx-only', ngrxOnly);
};
