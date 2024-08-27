import { input, print } from './bitcamp/lib.js';

let dollars = input("How much was the meal? ");

let percent = input("What percentage would you like to tip? ");

let tip = calculate_tip(dollars, percent);

function calculate_tip(dollars, percent) {
return dollars * percent / 100;
}

print(`You should tip - $${tip}`);