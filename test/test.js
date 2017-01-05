const test = require('ava')
const globbies = require('../')

test('main', t => {
	let dir = '../package.json'
	globbies(dir, (err, data) => {
		if (err) throw err
		t.true(data > 0)
	})
})
