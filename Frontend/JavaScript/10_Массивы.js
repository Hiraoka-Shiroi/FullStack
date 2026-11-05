const products = ["Хлеб", "Молоко", "Яйца"];
console.log(products[0]);
console.log(products[2]);

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.length);

const colors = ["Красный", "Зелёный", "Синий", "Жёлтый"];
console.log(colors[colors.length - 1]);

const tasks = ["Учить JavaScript", "Повторить условия", "Решить задачи"];
tasks[1] = "Изучить массивы";
console.log(tasks);
console.log(tasks.length);

const students = ["Аня", "Борис"];
students.push("Виктор");
console.log(students);
console.log(students.length);

const basket = ["Яблоки", "Бананы", "Апельсины", "Груши"];
basket.pop();
console.log(basket);
console.log(basket.length);

const devices = ["Телефон", "Ноутбук"];
devices.unshift("Планшет");
console.log(devices);
console.log(devices.length);

const queue = ["Товар 1", "Товар 2", "Товар 3", "Товар 4"];
queue.shift();
console.log(queue);
console.log(queue.length);

const productsList = ["Молоко", "Хлеб", "Мясо", "Яйца"];
console.log(productsList.includes("Молоко"));
console.log(productsList.includes("Сыр"));

const inventory = ["Товар A", "Товар B", "Товар C"];
inventory[1] = "Кефир";
inventory.push("Сыр");
inventory.shift();
console.log(inventory.includes("Кефир"));
console.log(inventory)
console.log(inventory.length);

const scores = [85, 90, 78, 92];

scores[1] = 100;
scores.push(90);
scores.unshift(50);
scores.pop();
console.log(scores.includes(100));
console.log(scores);
console.log(scores.length);