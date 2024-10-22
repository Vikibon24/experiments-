import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
    throw new Error ("Function doesn't work right!");
}
if (capitalize('') !== '') {
    throw new Error ("Function doesn't work right!");
}
console.log('All tests are done!');