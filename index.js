'use strict'
const glob = require('glob')
const path = require('path')

/**
 * Main exporting function
 *
 * @param {String} promise
 * @returns {Callback} an instance of a resolver
 */
function globbies (dir, cb) {
	glob(path.resolve(__dirname, dir), (err, files) => {
		if (err) throw new Error(err)

		return files.map(file => cb(file))
	})
}

module.exports = globbies
