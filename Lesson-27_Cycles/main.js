'use strict';

// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
const sumInRange = (a, b) => {
    if (a < b) {
      let c = [];
      for (let i = a; i <= b; i++) {
        c.push(i);
      }
      const resoult = c.reduce((cur, res) => {
        return Number(cur) + Number(res);
      });
      console.log(resoult);
    } else console.log(`First number should be less than second!`);
  };
  
  // sumInRange(1, 3);
  

// 2. Запросить у пользователя число и вывести все делители этого числа.
function getNod() {
    for (var x = arguments[0], i = 1; i < arguments.length; i++) {
      let y = arguments[i];
      while (x && y) {
        x > y ? (x %= y) : (y %= x);
      }
      x += y;
    }
  
    console.log(x);
  }
  // getNod(5, 15);
  

// 3. Определить количество цифр в введенном числе.

const getDivider = (a) => {
    const numbers = [];
    for (let i = 1; i <= a; i++) {
      if (a % i == 0) {
        numbers.push(i);
      }
    }
    console.log(numbers);
  };
  // getDivider(132);


// 4. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

const getAmountOfSymbols = (a) => {
    const symbols = String(a);
    const newSymbols = symbols.split("");
    console.log(newSymbols.length);
  };
  // getAmountOfSymbols(1000000);
  

// 5. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

const getTenNumbers = (...args) => {
    let positive = [];
    let negative = [];
    let zero = [];
    let even = [];
    let notEven = [];
  
    args.forEach((el) =>
      el > 0
        ? positive.push(el)
        : el < 0
        ? negative.push(el)
        : el === 0
        ? zero.push(el)
        : alert(`Something wrong with this element "${el}" !`)
    );
  
    args.forEach((el) => (el % 2 ? notEven.push(el) : even.push(el)));
  
    console.log(
      `There are ${positive.length} positive numbers, ${negative.length} negative numbers, ${zero.length} zeroes, ${even.length} of them are even and ${notEven.length} of them are not even!`
    );
  };
  // getTenNumbers(4, 3, 6, 5);
  

// 6. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

const canculator = () => {
    let resoult;
    let decition;
    do {
      const a = prompt("Write first number");
      const b = prompt("White second number");
      const c = prompt("Write symbol", "/ , 8 , + or -");
      resoult =
        c === "/"
          ? a / b
          : c === "*"
          ? a * b
          : c === "+"
          ? Number(a) + Number(b)
          : c === "-"
          ? a - b
          : alert("Something wrong");
      console.log(resoult);
      decition = confirm("Do you want more?");
    } while (decition === true);
  };
  // canculator();

// 7. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

const moveNumbers = (a, b) => {
    let c = String(a);
    let d = c.split([]);
    d = d.splice(+b).concat(d);
    let i = d.join();
  
    console.log(i.replace(/[^-0-9]/gim, ""));
  };
  // moveNumbers(123456, 2);

// 8. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

const showDay = (a) => {
    const today = a;
    let day = today.getDate();
    day = day + 1;
    today.setDate(day);
    console.log(today);
  };
  const changeDay = () => {
    let newDate = new Date();
    let decition;
    do {
      decition = confirm("Show next day?");
      showDay(newDate);
    } while (decition === true);
  };
  // changeDay();

// 9. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

const table = () => {
    let number;
    let symbol;
    for (let item = 2; item <= 9; item++) {
      for (let item2 = 1; item2 <= 10; item2++)
        console.log(`${item} * ${item2} = ${item * item2}`);
    }
  };
  // table();
  
  // Task 10
  
  let question = (a) => {
    let input;
    do {
      input = prompt(`Ваше число > ${a}, < ${a} или = ${a}?`);
    } while (input !== ">" && input !== "<" && input !== "=");
    return input;
  };
  
  let guessNumber = () => {
    let numb = 100;
    alert(`Загадайте число от 1 до ${numb}.`);
    numb /= 2;
    let m = numb;
    let input = question(numb);
    while (input !== `=`) {
      m /= 2;
      if (input === `>`) {
        numb = numb + +m.toFixed();
      } else {
        numb = numb - +m.toFixed();
      }
      input = question(numb);
    }
    alert(`Финиш!!!`);
  };
  guessNumber();