'use strict';
var test = require('ava');
var kmhToMph = require('./');

test('kmhToMph', function (t) {
	t.plan(2);

	t.assert(kmhToMph(1) === 0.621371192);
	t.assert(kmhToMph(50) === 31.0685596);
});
