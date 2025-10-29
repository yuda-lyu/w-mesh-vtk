# w-mesh-vtk
A tool for Vtk data.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-mesh-vtk.svg?style=flat)](https://npmjs.org/package/w-mesh-vtk) 
[![license](https://img.shields.io/npm/l/w-mesh-vtk.svg?style=flat)](https://npmjs.org/package/w-mesh-vtk) 
[![npm download](https://img.shields.io/npm/dt/w-mesh-vtk.svg)](https://npmjs.org/package/w-mesh-vtk) 
[![npm download](https://img.shields.io/npm/dm/w-mesh-vtk.svg)](https://npmjs.org/package/w-mesh-vtk) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-mesh-vtk.svg)](https://www.jsdelivr.com/package/npm/w-mesh-vtk)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-mesh-vtk/global.html).

## Installation

### Using npm(ES6 module):
```alias
npm i w-mesh-vtk
```

#### Example for read:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-mesh-vtk/blob/master/g-read.mjs)]
```alias
尚待開發
```

#### Example for write:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-mesh-vtk/blob/master/g-write.mjs)]
```alias
import fs from 'fs'
import wmv from './src/WMeshVtk.mjs'

let fpIn = './_mesh/mne.json'
let fpOut = './_mesh/mesh.vtk'
let name = 'mesh'

console.log('reading...')
let j = fs.readFileSync(fpIn, 'utf8')
let m = JSON.parse(j)
m = {
    ...m,
    name,
}
// console.log('m', m)

console.log('writing...')
wmv.writeVtk(m, fpOut)
    .then((r) => {
        console.log('finish.')
    })
    .catch((err) => {
        console.log(err)
    })
```
