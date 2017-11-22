/**
 * Ngrx Generator with containers
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
    message: 'Type in singular name of the resource',
  }, {
    type: 'input',
    name: 'plural',
    message: 'Type in plural name of the resource',
    default: 'items',
  }, {
    type: 'confirm',
    name: 'needNgModule',
    message: 'Do you need to create a new ngModule?',
    default: true,
  }, {
    type: 'input',
    name: 'moduleName',
    message: 'Type in module name (like book-page)',
    default: 'item-page',
    when: function (data) {
      return data.needNgModule;
    },
  }],

  actions: function (data) {
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

    // Check if root reducer is already existed
    if (!config.rootStateExisted) {
      actions.push({
        type: 'add',
        path: config.rootReducerPath,
        templateFile: './templates/ngrx/index.ts.hbs'
      })
    }

    if(!config.reducerUtilsExisted){
      actions.push({
        type: 'add',
        path: config.reducerUtilsPath,
        templateFile: './templates/ngrx/utils.ts.hbs'
      })
    }

    // need to create a container
    if (data.needNgModule) {
      // create ngModule
      actions.push({
        type: 'add',
        path: config.pagesFolder + '/{{dashCase moduleName}}/{{dashCase moduleName}}.module.ts',
        templateFile: './templates/component/module.ts.hbs'
      }, {
          type: 'add',
          path: config.pagesFolder + '/{{dashCase moduleName}}/{{dashCase moduleName}}.component.ts',
          templateFile: './templates/component/component.ts.hbs'
        }, {
          type: 'add',
          path: config.pagesFolder + '/{{dashCase moduleName}}/{{dashCase moduleName}}.component.html',
          templateFile: './templates/component/component.html.hbs'
        }, {
          type: 'add',
          path: config.pagesFolder + '/{{dashCase moduleName}}/{{dashCase moduleName}}.component.scss',
          templateFile: './templates/component/component.scss.hbs'
        }, {
          type: 'add',
          path: config.pagesFolder + '/{{dashCase moduleName}}/index.ts',
          templateFile: './templates/component/index.ts.hbs'
        }, {
          type: 'add',
          path: config.pagesFolder + '/{{dashCase moduleName}}/{{dashCase moduleName}}.routes.ts',
          templateFile: './templates/component/component.routes.ts.hbs'
        }
      );
    }

    return actions;
  }
}
