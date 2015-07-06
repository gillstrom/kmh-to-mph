'use strict';
module.exports = function (kmh) {
	if (typeof kmh !== 'number') {
		throw new TypeError('Expected a number');
	}

	return kmh * 0.621371192;
};
