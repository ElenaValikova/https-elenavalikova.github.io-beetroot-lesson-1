'use strict';

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

const cars = {
    manufacturer: " Porshe, ",
    model: " GT, ",
    year: " 2015, ",
    speed: " 235 km/h, ",
  };
  const showCarInfo = () => {
    for (let inf in cars) {
      document.write(inf);
      document.write(cars[inf]);
    }
  };
  const countSpeed = (distance, speed) => {
    let time = distance / speed;
    let timeCount = time / 5;
    let finTime = time + timeCount;
  
    return finTime.toFixed(1);
  };
  // console.log(countSpeed(100, 20));

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

let drobe1 = {
    numerator: 2,
    denominator: 5,
  };
  
  let drobe2 = {
    numerator: 1,
    denominator: 3,
  };
  function ShowDrobes(drobes) {
    return `${drobes.numerator}/${drobes.denominator}`;
  }
  let addition = () => {
    let sumOfDrobes = {};
    sumOfDrobes.numerator =
      drobe1.numerator * drobe2.denominator +
      drobe2.numerator * drobe1.denominator;
    sumOfDrobes.denominator = drobe1.denominator * drobe2.denominator;
    console.log(`Сумма двух дробей - ${ShowDrobes(sumOfDrobes)}`);
  };
  
  let subtraction = () => {
    let drobeSubtraction = {};
    drobeSubtraction.numerator =
      drobe1.numerator * drobe2.denominator -
      drobe2.numerator * drobe1.denominator;
    drobeSubtraction.denominator = drobe1.denominator * drobe2.denominator;
    console.log(`При отнимании дробей вышло - ${ShowDrobes(drobeSubtraction)}`);
  };
  
  let multiplication = () => {
    let drobeMultiplication = {};
    drobeMultiplication.numerator = drobe1.numerator * drobe2.numerator;
    drobeMultiplication.denominator = drobe1.denominator * drobe2.denominator;
    console.log(
      `При умножении дробей вышло - ${ShowDrobes(drobeMultiplication)}`
    );
  };
  
  let division = () => {
    let drobeDivision = {};
    drobeDivision.numerator = drobe1.numerator * drobe2.denominator;
    drobeDivision.denominator = drobe2.numerator * drobe1.denominator;
    console.log(`При делении двух дробей вышло - ${ShowDrobes(drobeDivision)}`);
  };
  
  let reduction = (numerator, denominator) => {
    let drobeReduct = {
      numerator: numerator,
      denominator: denominator,
    };
    for (let i = drobeReduct.numerator; i >= 1; i--) {
      if (drobeReduct.numerator % i == 0 && drobeReduct.denominator % i == 0) {
        drobeReduct.numerator = drobeReduct.numerator / i;
        drobeReduct.denominator = drobeReduct.denominator / i;
      }
    }
  
    console.log(`После сокращения дроби вышло - ${ShowDrobes(drobeReduct)}`);
  };
  // console.log(reduction(10, 40));
  

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран;
// Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

const time = {
    hours: 20,
    minutes: 15,
    seconds: 10,
  };
  
  const showTime = () => {
    let correntDate = new Date();
    let correntHours = correntDate.setHours(time["hours"]);
    let correnMinutes = correntDate.setMinutes(time["minutes"]);
    let correntSeconds = correntDate.setSeconds(time["seconds"]);
    console.log(correntDate);
  };
  // showTime();
  
  const changeSec = (sec) => {
    let correntDate = new Date();
    let correntHours = correntDate.setHours(time["hours"]);
    let correnMinutes = correntDate.setMinutes(time["minutes"]);
    let correntSeconds = correntDate.setSeconds(time["seconds"] + sec);
    console.log(correntDate);
  };
  // changeSec(60);
  
  const changeMin = (min) => {
    let correntDate = new Date();
    let correntHours = correntDate.setHours(time["hours"]);
    let correnMinutes = correntDate.setMinutes(time["minutes"] + min);
    let correntSeconds = correntDate.setSeconds(time["seconds"]);
    console.log(correntDate);
  };
  // changeMin(46);
  
  const changeHour = (hour) => {
    let correntDate = new Date();
    let correntHours = correntDate.setHours(time["hours"] + hour);
    let correnMinutes = correntDate.setMinutes(time["minutes"]);
    let correntSeconds = correntDate.setSeconds(time["seconds"]);
    console.log(correntDate);
  };
  // changeHour(1);