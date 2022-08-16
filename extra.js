//try catch finally//

// console.log('start');
// try {
//     console.log('try block');
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log('finally block');
// }
// console.log('end');


// function calc(a, b) {
//     // try {
//     //
//     //
//     // } catch (e){
//     //
//     // }
//
//     if (b === 0) {
//         throw new Error('b is 0');
//     }
//     return a / b;
// }
//
//
// calc(10, 0);


//Objects destructuring//

// let name = 'vasya';
// let age = 31;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     },
// }
// console.log(user);
// user.foo();

// let user = {
//     name: 'vasya',
//     age: 31,
//     foo() {
//         console.log('foo');
//     },
// };


// let {name,foo} = user;
// console.log(name);
// // console.log(age);
// foo();
//
// function asd({name}) {
//     console.log(name)
// }
//
// let obj = {a: 'asduads', name: 'wqyreq'};
// asd(obj);

// let {status} = user;
// console.log(status);


// let name = 'vasya';
// let age = 31;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     },
//     wife: {
//         name: 'anna'
//     }
// }
// console.log(user);
// user.foo();
//
// let {name: userName, age: userAge, wife:{name:wifeName},wife} = user;
// console.log(userName, userAge);
// console.log(wife);


// let [a, , c] = [11, 22, 33];
// console.log(a, c);

// let users = [
//  {name: 'vasya', age: 31, status: false},
//  {name: 'petya', age: 30, status: true},
//  {name: 'kolya', age: 29, status: true},
//  {name: 'olya', age: 28, status: false},
//  {name: 'max', age: 30, status: true},
//  {name: 'anya', age: 31, status: false},
//  {name: 'oleg', age: 28, status: false},
//  {name: 'andrey', age: 29, status: true},
//  {name: 'masha', age: 30, status: true},
//  {name: 'olya', age: 31, status: false},
//  {name: 'max', age: 31, status: true}
// ];

// let [{name, age, status}, user2] = users;
//console.log(user2);


// Spread operator

// let user = {
//     name: 'vasya',
//     age: 123
// };
//
// let user2 = user;
//
//
// let user3 = {
//     name: 'vasya',
//     age: 123
// };
//
//
// console.log(user === user2);
// console.log(user === user3);


// let user = {
//     name: 'vasya',
//     age: 123
// };
//
// let userCopy = {...user}
// console.log(userCopy);
// console.log(userCopy === user);
// userCopy.age = 0;
// console.log(userCopy);
// console.log(user);

// let nums = [11, 22, 33];
// let nums2 = [...nums];
// console.log(nums === nums2);


// Deep copy


// let user = {
//         name: 'vasya',
//         skills: ['html', 'js'],
//         greeting: function () {
//         }
//     }
//
//     // let userClone = {...user};
//     // console.log(user === userClone);
//     // console.log(user.skills === userClone.skills);
//
//     // let s = JSON.stringify(user); // convert to JSON
//
//     // let userJsonClone = JSON.stringify(user);
//     // console.log(userJsonClone);
//     // let parse = JSON.parse(userJsonClone);
//     // console.log(parse); // greeting
//     // console.log(user); // greeting
//     // console.log(user === parse);
//     // console.log(user.skills === parse.skills);
//
//     let assign = Object.assign({}, user);
//     console.log(assign);
//     console.log(assign === user);
//     console.log(assign.skills === user.skills);


// Closures


// function userBuilder(name, age) {
//     let user = {name, age};
//     return {
//         getName() {
//             return user.name;
//         },
//         getAge() {
//             return user.age;
//
//         },
//         setAge(age) {
//             if (age > 0) {
//                 user.age = age;
//             }
//         },
//     }
// }
//
// let builder = userBuilder('vasya', 31);
// console.log(builder);
//
// console.log(builder.getAge());
// console.log(builder.getName());
// builder.setAge(-100);
// console.log(builder.getAge());


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// function mapUsers(array,index) {
//     array.map(value => document.write(`<div>${value.name}${value.age}</div>`));
// }
//
// mapUsers(users);

// let reduce = users.reduce((previousValue, currentValue) => {
//     if (currentValue.age>=30) {
//         previousValue.olderAge.push(currentValue)
//     }else if (currentValue.age<30) {
//         previousValue.youngerAge.push(currentValue)
//     }
//     if (currentValue.status) {
//         previousValue.trueStatus.push(currentValue)
//     }else if (!currentValue.status) {
//         previousValue.falseStatus.push(currentValue)
//     }
//     return previousValue;
//
//     }, {
//         olderAge: [],
//         youngerAge: [],
//         trueStatus: [],
//         falseStatus: []
//     });
//
// console.log(reduce);

//Closures

// function userBuilder(name, age) {
//     let user = {name, age};
//
//     return {
//
//         getName() {
//             return user.name
//         },
//
//         getAge() {
//             return user.age
//         },
//
//         setAge(age) {
//             if (age > 0) {
//
//                 user.age = age;
//             }
//         }
//     }
// }
//
//
// let builder = userBuilder('Artem', 54);
// console.log(builder);
// console.log(builder.getAge());
// console.log(builder.getName());
// builder.setAge(34);
// console.log(builder.getAge());
