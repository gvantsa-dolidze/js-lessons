import { input, print } from './bitcamp/lib.js';

let message = input('Enter your message here:').replaceAll(':)', '🙂').replaceAll(':(', '🙁');
function convert(text) {
    return text;
}
print(convert(message));