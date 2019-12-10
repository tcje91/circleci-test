const test = require('ava');
const { comiserate } = require('./utils');

test('comiserate() returns default comiseration', t => {
  t.is(comiserate(), 'He was a good man... what a rotten way to die');
});

test('comiserate() returns comiseration using custom arguments', t => {
  t.is(comiserate('male', 'fry'), 'He was a good man... what a rotten way to fry');
  t.is(comiserate('female', 'cry'), 'She was a good woman... what a rotten way to cry');
  t.is(comiserate('idk', 'dry'), 'It was a good thing... what a rotten way to dry');
});
