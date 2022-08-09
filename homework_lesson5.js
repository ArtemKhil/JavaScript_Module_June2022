// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б.

// let rectangleSquare = (a, b) => a * b;
// let result = rectangleSquare(3, 4);
// console.log(result);

// - створити функцію яка обчислює та повертає площу кола з радіусом r.

// let circleSquare = (r) => Math.PI * (r ** 2);
// let result = circleSquare(4);
// console.log(result);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r.

// let cylinderSquare = (r, h) => 2 * Math.PI * r * h;
// let result = cylinderSquare(2, 4);
// console.log(result);

//- створити функцію яка приймає масив та виводить кожен його елемент.

//let numbers = [12, 45, 67, 89, 67];

// function viewArray(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
//
// }
//
// viewArray(numbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент.

// function pCreator(text) {
//     document.write(`<p>${text}</p>`);
//
// }
//
// pCreator('Artem Khilchenko');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.

// function ulCreator(text) {
//     document.write(`<ul><li>${text}</li>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                    </ul>`)
// }
//
// ulCreator('Artem Khilchenko');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл).

// function ulWithLi(text, count) {
//     document.write(`<ul>`)
//
//     for (let i = 0; i < count; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//
//     document.write('</ul>')
// }
//
// ulWithLi('Artem Khilchenko', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let primArray = [23, 45, 'sprite', false, 67, 'coke', 98, true];
//
// function olCreator(array) {
//     document.write(`<ul>`)
//
//     for (let arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//
//     document.write(`</ul>`)
//
// }
//
// olCreator(primArray);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
//  Для кожного об'єкту окремий блок.

// let users = [
//     {id: 1, name: 'john', age: 34},
//     {id: 2, name: 'steve', age: 36},
//     {id: 3, name: 'andrew', age: 57},
//     {id: 4, name: 'matt', age: 23}];
//
// function objWriter(array) {
//     for (const arrayElement of array) {
//
//         document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)
//     }
// }
//
// objWriter(users);

// - створити функцію яка повертає найменьше число з масиву

// let numbers = [3, 6, 8, 9, 5, 78,];
//
// function minNumber(array) {
//     let min = array[0];
//     for (const minElement of array) {
//         if (minElement < min) {
//             min = minElement;
//         }
//     }
//     return min;
// }
//
// console.log(minNumber(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let numbers = [23, 34, 12, 3, 5, 7, 8];
//
// function sumNumbers(array) {
//     let sum = 0;
//     for (const arrElement of array ) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// console.log(sumNumbers(numbers));