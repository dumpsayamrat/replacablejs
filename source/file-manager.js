const R = require('ramda')
const fs = require('fs').promises
// const path = require('path')
// const currentDir = path.join(__dirname)
const onlyFile = R.filter(dirent => !dirent.isDirectory())
const getName = R.map(R.prop('name'))
const getFileNames = R.compose(
  getName,
  onlyFile,
)

export const getFileNameList = async(path) => {
  const dirents = await fs.readdir(path, {withFileTypes: true})
  return getFileNames(dirents)
}
