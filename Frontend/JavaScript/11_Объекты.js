const firstEmptyObject = {};
const secondEmptyObject = new Object();

const user = {
    login: 'iamsuperhero',
    password: 'qwerty',
    "last-auth": '05.04.2024',
    age: 33,
    isAdult: true,
    job: null,
    kids: undefined,
    address: {
        city: "Москва",
        zipCode: 555444,
    }
    sayHi: () => console.log("Привет!"),
}
console.log(user.login);
console.log(user[password]);
console.log(user["last-auth"]);
user.sayHi();

const product = {
    name: "Хлеб",
    price: 150,
    quantity: 5,
    available: true
};