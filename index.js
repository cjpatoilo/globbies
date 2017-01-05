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
	dir = path.resolve(__dirname, dir)
	glob(dir, (err, data) => {
		if (err) throw err
		data.map(data => cb(err, data))
	})
}

module.exports = globbies
