'use strict'
const glob = require('glob')
const path = require('path')

function globbies (dir, cb) {
  glob(path.resolve(__dirname, dir), (err, files) => {
    if (err) throw err
    return files.map(file => cb(file))
  })
}

module.exports = globbies
