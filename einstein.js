import { input, print } from './bitcamp/lib.js';

let numberM = Number(input('Enter number:'));
function calculateLilEinstein(energy) {
    return energy * 300000000 * 300000000;
}
print(calculateLilEinstein(numberM));