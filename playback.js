import { input, print } from './bitcamp/lib.js';

let message = input('Enter your message: ').replaceAll(' ', '...');
print(message);