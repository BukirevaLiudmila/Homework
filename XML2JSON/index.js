const parseString = require('xml2js').parseString;
const fs = require('fs');
const jsonfile = require('jsonfile');
const tape = require('tape');
jsonfile.spaces = 4;

fs.readFile('./filmography.xml', {encoding: 'utf8'}, (err, data) => {
	parseString(data, function(err, result) {
		testing(result);
		jsonfile.writeFile('./filmography.json', result, function(err) {
			console.error('Eror: ', err);
		});
	});
});

function testing(data) {
	tape('Number of directors', assert => {
		assert.plan(3);
		const expected = 2;
		const actual = data.filmography.director.length;
		assert.equal(expected, actual);

		const expected2 = 4;
		const actual2 = data.filmography.director[0].category.length;
		assert.equal(expected2, actual2);

		const expected3 = {film: 2, TVserial: 1, clip: 1};
		let actual3 = {film: 0, TVserial: 0, clip: 0};
		data.filmography.director[0].category.forEach(function(item) {
			switch(item.$.name) {
				case 'film':
					actual3.film++;
					break;
				case 'TVserial':
					actual3.TVserial++;
					break;
				case 'clip':
					actual3.clip++;
					break;
				default:
					break;
			}
		});
		assert.deepEqual(expected3, actual3);
	});
};
