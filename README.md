# Vue component library POC

## How to create a vue library 

This library were created with [`vue-sfc-rollup`](https://www.npmjs.com/package/vue-sfc-rollup) cli.

```powershell
npm install -g vue-sfc-rollup
```

after installed

```powershell
sfc-init
```

follow the steps and select project

run `npm install`

### Building "prod" version

`npm run build`

IN CASE it breaks, you can either:

* upgrade node to v17
* change file name rollup.config.js to rollup.config.mjs

OR

* keep node with v16 and file name ``rollup.config.js`
* npm install rollup@~2.66