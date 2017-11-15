/**
 * Ngrx Only Generator
 */

/* eslint strict: ["off"] */

'use strict';

// const componentExists = require('../utils/componentExists');
const config = require('./config.js');

module.exports = {
  description: 'Add a ngrx resource',
  prompts: [{
    type: 'input',
    name: 'odd',
    default: 'item',
    message: 'Type in odd name the resource',
  }, {
    type: 'input',
    name: 'plural',
    message: 'Type in plural name the resource',
    default: 'items',
  }],

  actions: function () {
    let actions = [{
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/actions/{{dashCase odd}}.ts',
      templateFile: './templates/ngrx/actions/action.ts.hbs'
    }, {
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/models/{{dashCase odd}}.ts',
      templateFile: './templates/ngrx/models/model.ts.hbs'
    }, {
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/effects/{{dashCase odd}}.ts',
      templateFile: './templates/ngrx/effects/effects.ts.hbs'
    }, {
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/effects/{{dashCase odd}}.spec.ts',
      templateFile: './templates/ngrx/effects/effects.spec.ts.hbs'
    }, {
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/services/{{dashCase odd}}.ts',
      templateFile: './templates/ngrx/services/service.ts.hbs'
    }, {
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/reducers/{{dashCase plural}}.spec.ts',
      templateFile: './templates/ngrx/reducers/reducers.spec.ts.hbs'
    }, {
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/reducers/{{dashCase plural}}.ts',
      templateFile: './templates/ngrx/reducers/reducers.ts.hbs'
    }, {
      type: 'add',
      path: config.baseNgrxPath + '/{{dashCase plural}}/reducers/index.ts',
      templateFile: './templates/ngrx/reducers/index.ts.hbs'
    }];

    // The root reducer is necessary
    if (!config.rootStateExisted) {
      actions.push({
        type: 'add',
        path: config.baseNgrxPath + '/index.ts',
        templateFile: './templates/ngrx/index.ts.hbs'
      })
    }

    return actions;
  }
}
