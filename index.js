/**
 * დასაწყისისთვის კოდის ამ ნაწილს არ მიაქციო ყურადღება.
 * მომავაში გაიგებ რისთვის გვჭირდება ის.
 *
 * ❌ თუმცა არ წაშალო! წინააღმდეგ შემთხვევაში დავალებებს ვერ შეასრულებ
 */
import { input, print } from './bitcamp/lib.js';

// დაიწყე კოდის წერა აქედან 👇
let name = input('what is your name?');
let greetings = getGreetings(name);
print(greetings)
function getGreetings(to) {
    return 'Hello ' + to;
}