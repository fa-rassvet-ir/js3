// 8 - 2 = 6
// 1 number
var myAge = 29

// 2 string
var myNameIs = 'Kutman'

// 3 boolean
var isRainy = false

// 4 null
var myBrother = null

// 5 undefined
var myDog;

// 6 object  {} = [] array
var phone = {
    model: "14 pro",
    color: "black",
    price: "1100",
    owner: myNameIs//Kutman
}


// ------CONDITIONS------- (if, switch)
// Готовые Функции (alert, prompt, confirm)

var color = "green"
// операторы (=, ==, ===, !, ??, &&, ||)
// red === red --> true
if(color === "red"){
    console.log('STOP');
} else if (color === "green") {
    // true
    console.log("Go ...")
} else if (color === "yellow") {
    // true
    console.log("WAIT ...");
} else {
    console.log('No COLOR');
}

var operation = "*"
if (operation === "+") {
    console.log(100 + 50);
} else if (operation === "-") {
    console.log(100 - 50);
} else if (operation === "*") {
    console.log(100 * 50);
} else if (operation === "/") {
    console.log(100 / 50);
}

var temp = 36
if (temp > 41) {
    console.log("Күүүн Ысыккыыы....");
}else if(temp > 35 && temp <40){
    console.log("Күүүн Ысыккыыы.... Абдан Ысыккыы");
}

// alert(myNameIs)

// var text = prompt("Атынды жаз")

// if(text.toLowerCase() === "kutman") {
//     console.log('Yes I am');
// }

// Weeks

var someText = "4"

switch(someText){
    case "Monday":
        console.log('Понедельник');
        break;
    case "2":
        console.log('Вторник');
        break;
    case "3":
        console.log('Среда');
        break;
    case "4":
        console.log('Четверг');
        break;
    case "5":
        console.log('Пятница');
        break;
    case "6":
        console.log('Суботта');
    case "Sunday":
        break;
        console.log('Воскресенье');
    break;
  default:
    break; 
}

if(!true){
    console.log('TRUE----');
}else{
    console.log('FALSE----')
}

var userDB = {
    name: "Kutman",
    email: 'test@gmail.com',
    password: 'qwerty00'
}