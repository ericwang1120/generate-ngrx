# generate-ngrx

Code Generator for ngrx, following best practices from [ngrx/platform/example-app](https://github.com/ngrx/platform/tree/master/example-app)
![](_screenshots/generator.gif).

Production ready now. Tested in [ngrx-todo](https://ericwangdemo.github.io/). [source code](https://github.com/ericwang1120/ngrx-todo)

## projects using the generator

[ngrx-todo](https://ericwangdemo.github.io/): TodoMVC written in Angular5 and Ngrx. [source code](https://github.com/ericwang1120/ngrx-todo)

[angular-boilerplate](https://angularb.github.io/): A boilerplate which is based on ngrx4, material design. [source code](https://github.com/ericwang1120/angular-boilerplate)

## Getting Started

Notice: this generator can only be used in node project, for ngrx4.

Currently, I am working on a [post](https://ericwangblog.github.io/Generate-Your-Ngrx/) which may help you to start a ngrx project with angular-cli and this generator. [click to see the post](https://ericwangblog.github.io/Generate-Your-Ngrx/)

If you have any problem or good idea, feel free to [create a new issue](https://github.com/ericwang1120/generate-ngrx/issues) so we'll be able to discuss.

If you like this generator, check the [source code](https://github.com/ericwang1120/generate-ngrx) and give me a star, many thanks.

## Install Globally

You can install it globally then playing around with it at any ngrx projects.

Install it via npm

```bash
npm install generate-ngrx -g
```

```bash
gen-ngrx
```

Currently, this generator will generate the following files in your **working directory**

```txt
ngrx
|   index.ts // root state reducer
|___actions //actions folder
|   |   action.ts
|___effects //effects folder
|   |   effects.ts
|   |   effects.spec.ts //jasmine-marbles testing
|___models //model folder
|   |   model.ts
|___reducers //reducer folder
|   |   index.ts //creating feature reducers
|   |   reducers.spec.ts
|   |   reducers.ts
|___services //service folder
    |   service.ts

```

This generator can work well if you create a **separating** folder to store all the ngrx modules. e.g. 'core/ngrx'. [like this](https://github.com/ericwang1120/angular-boilerplate/tree/master/src/app/core/ngrx). The root reducer is index.ts.

Instead of changing your working directory frequently, it is recommended to add these lines in your package.json

```json
{
 "genNgrx": {
    "pagesFolder": "./src/app/pages",
    "baseNgrxPath": "./src/core/ngrx",
    "rootReducerPath": "./src/core/ngrx/index.ts"
 }
}
```

The **pagesFolder** is the directory where you usually store your pages.

The **baseNgrxPath** is the directory to store your ngrx modules. Then files will be generated based on the configured path.

The **rootReducerPath** is the path of your root reducer.

## Install for Project

You can also install it on specific projects

```bash
npm install --dev generate-ngrx
```

Then add a line in your scripts of package.json

```json
"scripts":{
    "generate": "gen-ngrx"
}
```

Then

```bash
npm run generate
```

## License

MIT
