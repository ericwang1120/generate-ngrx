# generate-ngrx

#### Code Generator for ngrx, following best practices from [ngrx/platform/example-app](https://github.com/ngrx/platform/tree/master/example-app)
![](_screenshots/generator.gif)

# Getting Started
Install it via npm
```
npm install gen-ngrx -g
```
```
gen-ngrx
```
Notice: this generator can only be used in node project.

Currently, this generator will generate the following files in your **working directory**
```
actions
    ----action.ts
effects
    ----effects.ts
    ----effects.spec.ts //jasmine-marbles testing
models
    ----model.ts
reducers
    ----index.ts //creating feature reducers
    ----reducers.spec.ts
    ----reducers.ts
services
    ----service.ts
index.ts // root state, it will be created if not exists
```

This generator can work well if you create a **separating** folder to store all the ngrx modules. e.g. 'core/ngrx'.

you can add these lines in your package.json

```
{
 "genNgrx": {
   "baseNgrxPath": "./src/app/core/ngrx" //directory to store ngrx modules
 }
}
```
Then files will be generated based on the configured path.

## License
MIT
