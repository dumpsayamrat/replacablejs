const R = require('ramda')
const fs = require('fs').promises
// const path = require('path')
// const currentDir = path.join(__dirname)
const isNotDirectory = R.filter(dirent => !dirent.isDirectory())
const getName = R.map(R.prop('name'))
const onlyFile = R.compose(
  getName,
  isNotDirectory,
)

fs.readdir('./mockdata', {withFileTypes: true})
  .then(dirents => {
    console.log(onlyFile(dirents))
  })
// console.log()
