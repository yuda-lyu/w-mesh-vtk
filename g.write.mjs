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

//node --max-old-space-size=120000 g.write.mjs
