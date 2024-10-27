import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('str'), 'Str');
assert.equal(capitalize(''), '');

