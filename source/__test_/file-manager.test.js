const fs = require('fs').promises
jest.mock('fs', () => ({
  promises: {
    readdir: jest.fn(),
  },
}))

// eslint-disable-next-line import/first
import {getFileNameList} from './../file-manager'
// import R from 'ramda';

describe('test file manager funciton', () => {
  it('should return file name list', async() => {
    const files = [
      {isDirectory: () => true, name: 'dir1'},
      {isDirectory: () => false, name: 'file.js'},
    ]
    fs.readdir.mockReturnValueOnce(files)
    const path = './'
    const res = await getFileNameList(path)
    expect(res).toStrictEqual(['file.js'])
  })
  it('should return empty list', async() => {
    const files = [
      {isDirectory: () => true, name: 'dir1'},
      {isDirectory: () => true, name: 'dir2'},
    ]
    fs.readdir.mockReturnValueOnce(files)
    const path = './'
    const res = await getFileNameList(path)
    expect(res).toStrictEqual([])
  })
})
