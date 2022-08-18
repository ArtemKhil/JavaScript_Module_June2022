// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
//
// let user1 = new User(1, 'Andrew', 'Mccarthy', 'amac@gmail.com', '9087678890');
// let user2 = new User(2, 'Roger', 'Emerson', 'rogem@gmail.com', '3354667789');
// let user3 = new User(3, 'Ross', 'Barden', 'rosbard@gmail.com', '3354785646');
// let user4 = new User(4, 'Maya', 'Clark', 'mayaclark@gmail.com', '31232677899');
// let user5 = new User(5, 'Dawn', 'Brazier', 'donbraz@gmail.com', '3336677899');
// let user6 = new User(6, 'Steve', 'Bass', 'steve@gmail.com', '3354877789');
// let user7 = new User(7, 'Artem', 'Khil', 'artemkhil@gmail.com', '3350007789');
// let user8 = new User(8, 'Emma', 'Watson', 'emmawatson@gmail.com', '00046677899');
// let user9 = new User(9, 'Peter', 'King', 'petrking@gmail.com', '3111667789');
// let user10 = new User(10, 'Seb', 'Bailey', 'sebbailey@gmail.com', '3322667789');
//
// let array = [];
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10,);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredId = array.filter(value => !(value.id % 2));
// console.log(filteredId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedId = array.sort((a, b) => a.id - b.id);
// console.log(sortedId);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.pdone = phone
//         this.order = order
//     }
// }
//
// let client1 = new Client(1, 'Andrew', 'Mccarthy', 'amac@gmail.com', '9087678890', ['apple', 'pear', 'strawberry']);
// let client2 = new Client(2, 'Roger', 'Emerson', 'rogem@gmail.com', '3354667789', ['tv', 'car', 'table', 'chair']);
// let client3 = new Client(3, 'Ross', 'Barden', 'rosbard@gmail.com', '3354785646', ['mouse', 'cat']);
// let client4 = new Client(4, 'Maya', 'Clark', 'mayaclark@gmail.com', '31232677899', ['crisps', 'ice-cream', 'bacon', 'sausage', 'pizza']);
// let client5 = new Client(5, 'Dawn', 'Brazier', 'donbraz@gmail.com', '3336677899', ['phone']);
// let client6 = new Client(6, 'Steve', 'Bass', 'steve@gmail.com', '3354877789', ['avocado', 'mango', 'papaya', 'melon']);
// let client7 = new Client(7, 'Artem', 'Khil', 'artemkhil@gmail.com', '3350007789', ['burger', 'fries', 'cola']);
// let client8 = new Client(8, 'Emma', 'Watson', 'emmawatson@gmail.com', '00046677899', ['paper', 'pen', 'printer', 'mirror']);
// let client9 = new Client(9, 'Peter', 'King', 'petrking@gmail.com', '3111667789', ['juice', 'water', 'coffee', 'wine']);
// let client10 = new Client(10, 'Seb', 'Bailey', 'sebbailey@gmail.com', '3322667789', ['flower', 'paint', 'card', 'brush', 'wallpaper']);
//
// let array = [];
// array.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
//
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sortedArrayByOrder = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sortedArrayByOrder);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxSpeed, volume) {
//     this.model = model
//     this.manufacturer = manufacturer
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.valume = volume
//
//     this.drive = function () {
//         console.log(`We are driving with ${this.maxSpeed} km/hour`);
//     };
//
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item}--${this[item]}`)
//             }
//         }
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
//
// }

//let car = new Car('Mazda', 'Japan', 2015, 240, 2.2);
//console.log(car);

//car.drive();
//car.info();

// car.increaseMaxSpeed(50);
// console.log(car);

// car.changeYear(2020);
// console.log(car);

// car.addDriver({name:'Artem',surname:'Khilchenko', age: 35})
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model,manufacturer,year,maxSpeed,volume) {
//         this.model=model
//         this.manufacturer=manufacturer
//         this.year=year
//         this.maxSpeed=maxSpeed
//         this.volume = volume
//     }
//
//     drive() {
//         console.log(`We are driving with speed ${this.maxSpeed} km/hour`);
//     }
//
//     info() {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//
//                 console.log(`${item}--${this[item]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newValue) {
//         this.maxSpeed += newValue;
//     }
//
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
//
// }

//let car = new Car('BMW', 'Germany', 2010, 320, 3.2);
//car.drive();
//car.info()

// car.increaseMaxSpeed(30);
// console.log(car);

// car.changeYear(2022);
// console.log(car);

//car.addDriver({name: 'John', surname: 'Emmet', age: 37});
//console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, shoeSize) {
//         this.name=name
//         this.age=age
//         this.shoeSize=shoeSize
//     }
// }
//
// let cinderella1 = new Cinderella('Mary', 23, 29);
// let cinderella2 = new Cinderella('Megan', 25, 26);
// let cinderella3 = new Cinderella('Julia', 32, 23);
// let cinderella4 = new Cinderella('Anna',21,24);
// let cinderella5 = new Cinderella('Sarah',36,32);
// let cinderella6 = new Cinderella('Emma',24,31);
// let cinderella7 = new Cinderella('Dawn',27,33);
// let cinderella8 = new Cinderella('Rachel',33,38);
// let cinderella9 = new Cinderella('Rosie',18,22);
// let cinderella10 = new Cinderella('Victoria',22,39);
//
// let cinderellaArray = [];
//
// cinderellaArray.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);
//
//
//
// class Prince extends Cinderella {
//     constructor(name,age,foundShoe) {
//         super(name,age)
//         this.foundShoe = foundShoe;
//     }
// }
//
// let prince = new Prince('Artem',35,26);

// let foundCinderella = (array,prince) => {
//     for(const item of array ) {
//         if (item.shoeSize===prince.foundShoe) {
//             console.log(`This is my Cinderella ${item.name}`);
//         }
//     }
// };
// foundCinderella(cinderellaArray, prince);

// let findCinderella = cinderellaArray.find(value => value.shoeSize === prince.foundShoe);
// console.log(findCinderella);






