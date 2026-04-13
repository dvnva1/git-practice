// script.js - файл с ошибками

// Ошибка 1: использование переменной до объявления
  // ReferenceError
let message = "Привет, мир!";
console.log(message);
// Ошибка 2: неправильное сравнение
let age = "25";
if (age == "25") {
    console.log("Возраст совпадает");
} else {
    console.log("Возраст не совпадает");
}

// Ошибка 3: опечатка в имени функции
function calculateSum(a, b) {
    return a + b;
}

let result = calculateSum(5, 10);  // Ошибка: опечатка в имени функции
console.log("Сумма: " + result);

// Ошибка 4: неправильная работа с массивом
let fruits = ["яблоко", "банан", "апельсин"];
for (let i = 0; i < fruits.length; i++) {  // Ошибка: i <= length (выход за границы)
    console.log(fruits[i]);  // Ошибка: undefined не имеет метода toUpperCase
}

// Ошибка 5: некорректная стрелочная функция
const multiply = (x, y) =>{
    x * y;
}
      // Ошибка: нет return для многострочной, но здесь однострочная - не хватает {} или return

console.log(multiply(3, 4));

// Ошибка 6: замыкание с потерей контекста
function Counter() {
    this.count = 0;
    
    setInterval(function() {
        count++;  // Ошибка: this указывает на глобальный объект
        console.log(count);
    }, 1000);
}

let counter = new Counter();

// Ошибка 7: неправильная обработка событий (если элементы существуют)
let button = document.getElementById("submitButton");

if (button) {
    button.addEventListener("click", function() {
        alert("Кнопка нажата!");
    });
} else {
    console.log("Элемент submitButton не найден");
}  // Ошибка: button может быть null, если элемента нет

// Ошибка 8: синтаксическая ошибка
let user = {
    name: "Иван",
    age: 30,  // Ошибка: пропущена запятая после name
    city: "Москва"
};

// Ошибка 9: деление на ноль
let a = 10;
let b = 0;
if (b == 0) {  // Ошибка: присваивание вместо сравнения
    console.log("Ошибка: деление на ноль");
} else {
    console.log(a / b);
}

// Ошибка 10: неправильное использование промиса
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Успех!");
    }, 1000);
});

myPromise.then(result => {
    console.log(result.toUpperCase());  // Ошибка: toUppercase вместо toUpperCase
});