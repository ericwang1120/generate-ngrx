const ngrxOnly = require('./ngrx-only.js');

module.exports = function (plop) {
	plop.setGenerator('ngrx-only', ngrxOnly);
};
