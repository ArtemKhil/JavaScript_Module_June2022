// - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3.

// let x = +prompt();
// if (x === 0) {
//     console.log('correct!!!')
// } else {
//     console.log('incorrect!!!')
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt();
//
// if (time === 0 && time <= 15) {
//     console.log('this is the first quarter of the hour');
// } else if (time >= 16 && time <= 30) {
//     console.log('this is the second quarter of the hour ')
// } else if (time >= 31 && time <= 45) {
//     console.log('this is the third quarter of the hour ')
// } else if (time >= 46 && time <= 59) {
//     console.log('this is the fourth quarter of the hour')
// } else {
//     console.log('please enter a number from 0 to 59 !!!')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let dayOfTheMonth = +prompt();
//
// if (dayOfTheMonth >= 1 && dayOfTheMonth <= 11) {
//     console.log('this is the first decade of the month!!!')
// } else if (dayOfTheMonth >= 12 && dayOfTheMonth <= 21) {
//     console.log('this is the second decade of the month!!!')
// } else if (dayOfTheMonth >= 22 && dayOfTheMonth <= 31) {
//     console.log('this is the third decade of the month!!!')
// } else {
//     console.log('please enter a number from 1 to 31!!! ')
// }

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let weekDayNumber = +prompt('Please enter number from 1 to 7');
//
// switch (weekDayNumber) {
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('Please enter a valid number');
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let num1 = +prompt('Enter first number');
// let num2 = +prompt('Enter second number');
//
// if (num1 > num2 && num1 !== num2) {
//     console.log(num1);
// } else if (num2 > num1 && num2 !== num1) {
//     console.log(num2);
// } else {
//     console.log('equal');
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt('Please enter something') || 'default';
// console.log(x);