"use strict";

/// 1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

const age = prompt('How old are you?');
if (age <= 12) {
    console.log('Уou are a child');
}
else if (age > 12 && age <= 18) {
    console.log('Уou are a teenager');
}
else if (age > 18 && age <= 60) {
    console.log('Уou are an adult');
}
else  {
    console.log('Уou are a pensioner');
}

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
const number = prompt('Enter a number 0-9:');
switch (number) {
    case '1':
        console.log('!');
        break;
    case '2':
        console.log('@');
        break;
    case '3':
        console.log('#');
        break; 
    case '4':
        console.log('$');
        break;      
    case '5':
        console.log('%');
        break;      
    case '6':
        console.log('^');
        break;      
    case '7':
        console.log('&');
        break;      
    case '8':
        console.log('*');
        break;      
    case '9':
        console.log('(');
        break;      
    case '0':
        console.log(')');
        break;
        default: 
        console.log('Wrong number');
}

// 3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
const threeDigitNumber = prompt('Enter three-digit number');
if(threeDigitNumber[0] == threeDigitNumber[1] || threeDigitNumber[0] == threeDigitNumber[2] || threeDigitNumber[2] == threeDigitNumber[1]) { 
    console.log('Есть одинаковые цифры');
}
else {
    console.log('Нет одинаковых цифр');
}
    
// 4. Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
const year = prompt('Enter year');
if ((year % 400 === 0 || year % 4 === 0) && year % 100 !== 0) {
    console.log('Год високосный');
}
else {
    console.log('Год не високосный');
}

// 5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
const fiveDigitNumber = prompt('Enter five-digit number');
if(fiveDigitNumber[0] == fiveDigitNumber[4] && fiveDigitNumber[1] == fiveDigitNumber[3]) { 
    console.log('Число является палиндромом');
}
else {
    console.log('Число не является палиндромом');
}

// 6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
const money = prompt('Конвертор валют: введите USD');
const  valuta = prompt('Выберите валюту в какую необходимо перевести EUR, UAN или AZN');
switch (valuta) {
    case 'EUR':
        console.log(Number(money) * 0.92);
        break;
    case 'UAN':
        console.log(Number(money) * 27.2);
        break;
    case 'AZN':
        console.log(Number(money) * 1.69);
        break;
    }

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
const amount = prompt('Введите сумму покупки');
if (amount >= 200 && amount < 300) {
    console.log('Cумма к оплате ' + amount * 0.97 + ' y.e.');
} 
else if (amount >= 300 && amount < 500) {
    console.log('Cумма к оплате ' + amount * 0.95 + ' y.e.');
} 
else if (amount >= 500) {
    console.log('Cумма к оплате ' + amount * 0.93 + ' y.e.');
}
else {
    console.log('Cкидка не начислена');
}

// 8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
const circlePerimeter = prompt('Введите длину окружности');
const squarePerimeter = prompt('Введите периметр квадрата');

if (squarePerimeter / 4 >= circlePerimeter / Math.PI) {
    console.log('Окружность поместиться в указанный квадрат');
} 
else {
    console.log('Окружность не поместиться в указанный квадрат');
} 

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.


// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

