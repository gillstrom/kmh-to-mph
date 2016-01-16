import test from 'ava';
import m from './';

test(t => {
	t.is(m(1), 0.621371192);
	t.is(m(50), 31.0685596);
});
