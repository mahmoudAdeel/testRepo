"use strict"
// function Instrctor(name, age, salary, course) {
//     this.name = name
//     this.age = age
//     this.salary = salary
//     this.course = course
// }
// Instrctor.prototype.welcome = function () {
//     console.log('welcome');
// }
// let ins1 = new Instrctor('mahmoud', 26, 200, 'web')
// let ins2 = new Instrctor('adel', 26, 200, 'web')
// let ins3 = new Instrctor('ahad', 26, 200, 'web')
// console.log(ins1)
// console.log(ins2)
// console.log(ins3)

// class Instrctor {
//     constructor(name, age, salary, course) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//         this.course = course;
//     }
// }
// let ins1 = new Instrctor('mahmoud', 26, 200, 'web')
// let ins2 = new Instrctor('adel', 26, 200, 'web')
// let ins3 = new Instrctor('ahad', 26, 200, 'web')
// console.log(ins1)
// console.log(ins2)
// console.log(ins3)


// let b = prompt('what is your role')

// if (b == 'admin') {
//     document.write('update' , 'create' , 'delete')
// }
// else if (b == 'moderator') {
//     document.write('update', 'create')
// }
// else {
//     document.write('hello user')
// }


// let result = prompt('what is tour result ')
// if (result >= 90) {
//     document.write('excellent')
// }
// else if (result >= 80) {
//     document.write('vera good')
// }
// else if (result >= 70) {
//     document.write('good')
// }
// else if (result >= 50) {
//     document.write('acceptable')
// }
// else {
//     document.write('fail')
// }

// let age = prompt('what is your age')
// age > 18 ?
//     document.write('123')
//     : age == 18 ?
//         document.write('456')
//         : document.write('789')

// let age = prompt('what is your age')
// let mah = age > 20 ?
//     '123'
//     : age == 20 ?
//         '346'
//         : '678';
// console.log(mah);


// let userName = prompt('what is your name')
// switch (userName) {
//     case 'mahmoud':
//         document.write('excellent');
//         break;
//     case 'adel':
//         document.write('very good');
//         break;
//     case 'ahmed':
//         document.write('good');
//         break;
//     default:
//         document.write('fail')
// }

// let mahmoud = ['adel', 'mostafe', 'ahmed', 'khled']
// let age = ['12', '45', '56', '35']
// let color = ['white', 'black', 'red', 'gureen']

// for (let i = 0; i < mahmoud.length; i++) {
//     console.log(`name: ${mahmoud[i]}`);
//     for (let m = 0; m < age.length; m++) {
//         console.log(`age: ${age[m]}`)
//     }
//     for (let o = 0; o < color.length; o++) {
//         console.log(`color: ${color[o]}`)
//     }
//     console.log('_____________')

// }

// $()
// $("#section").animate({ width: "100%" }, 1000)
// $("#section").animate({ height: "100vh" }, 1000, function () {
//     $("h1").fadeIn(800, function () {
//         $("col-md-4").slideDown(1000, function () {
//             $('h3').fadeIn(1000)
//         })
//     })
// })

// $('.sm-img').click(function () {
//     $('#img').attr('src', $(this).attr(src))
// })


// function calcAge(age) {
//     let result = age * 356;
//     console.log(result);

// }
// calcAge()

// function prs(price, taxes, ads) {
//     let product = price + taxes
//     let result = product + ads
//     console.log(result);
// }
// prs(500, 2.5, 10)
// prs(200, 2.0, 15)
// prs(500, 1.5, 20)


// function days(age) {
//     let result = age * 365;
//     return result;
// }
// let day = days(26)
// console.log(day, 'day')
// function calcAgeByHours(age) {
//     let result = age * 24;
//     return result;
// }
// let hour = calcAgeByHours(day)
// console.log(hour, 'hours');


// function calc(...numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += numbers[i];

//     }
//     console.log(result);
// }
// calc(24, 546, 87, 9879, 453,);


// let car = {
//     title: 'BMW',
//     price: 50000,
//     color: ['white', 'red', 'black'],
//     model: 2023,
//     m: function () {
//         return 'mahmoud'

//     }
// }
// console.log(car);

// let skillsYou = 'js'
// let m = {
//     userName: 'mahmoud',
//     listName: 'adel',
//     address: 'asoan',
//     skills: ['html', 'css', 'js'],
//     age: 26,
//     skillsYou: function () {
//         if (m.skills === 'html') {
//             return 'hallo'
//         }
//         else if ('js') {
//             return 'hallo 2'
//         }
//         else if ('css') {
//             return 'hallo 3'
//         }
//         else {
//             'sancyou'
//         }
//     },

// }
// console.log(m.h);


// let up =document.getElementsById('up')
// let under =document.getElementsById('under')
// let text =document.getElementsById('text')
// let mah =document.getElementsById('mah')
// let conte =document.getElementsById('conte')




