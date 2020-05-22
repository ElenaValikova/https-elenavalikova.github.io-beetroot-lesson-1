'use strict';

// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
alert('Task 1');
let a = prompt("Enter first number");
let b = prompt("Enter second number");

const showNumber = function () {
    
    if (a < b) {
        return '-1';
    }
    if(a > b) {
        return '1';
    }
    if(a == b) {
        return 0;
    } 
}
alert(showNumber());

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
const factorial = function(n) {
    if (n) {
        return n * factorial(n - 1);
    }
    return 1;
};

consolele.log(factorial(0));



// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.

function getThreeDigits(c, d, e) {
  console.log(String(c) + String(d) + String(e));
}
getThreeDigits(2, 3, 1);


// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function findSquare(k, l = k) {
    console.log(k * l)
}
findSquare(6);

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
const perfectNumber = function(n, i = 1, sum = 0) {
    if (n / i < 1 || i >= n) {
        return n === sum && n; 
    }
    return perfectNumber(n, i + 1, n % i ? sum : sum + i);
}
console.log(perfectNumber(28));

// 6.
const perfectRange = function(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);

    if (perfectNumber(min)) {
        console.log(min);
    }

    if ( min < max ) {
        perfectRange(min + 1, max);
    }
    return;
}
perfectRange(1, 30);


// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
const getTime = function (hh, mm = 0, ss = 0) {
    let time = new Date();
    time.setHours(hh, mm, ss);
    console.log(time.toLocaleTimeString());
}   
getTime(10);


// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
const getTimeInSeconds = function (hh, mm = 0, ss = 0) {
    let time2 = new Date();
    time2.setHours(hh, mm, ss);
    let hoursInSeconds =  time2.getHours() * 60 * 60;
    let minutesInSeconds = time2.getMinutes() * 60;

    console.log(hoursInSeconds + minutesInSeconds + time2.getSeconds());
    return hoursInSeconds + minutesInSeconds + time2.getSeconds();
}   
getTimeInSeconds(1, 2, 15);

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

const getTime3 = function(ss) {
    let secondsInHours =("0" + Math.floor(ss / 3600)).slice(-2);
    let secondsInMinutes = ("0" + Math.floor((ss % 3600) / 60)).slice(-2);
    let seconds =("0" + (ss - 3600 * secondsInHours - 60 * secondsInMinutes)).slice(-2);

    console.log(`${secondsInHours}: ${secondsInMinutes} : ${seconds}`);
    return `${secondsInHours}: ${secondsInMinutes} : ${seconds}`;
}
getTime3(3750);

// 10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

const getSubtractionTimes = function (h1, m1, s1, h2, m2, s2) {
    let timeInSeconds1 = getTimeInSeconds(h1, m1, s1);
    let timeInSeconds2 = getTimeInSeconds(h2, m2, s2);

    console.log(getTime3(timeInSeconds1 - timeInSeconds2));
}
getSubtractionTimes(1, 2, 5, 0, 43, 3);