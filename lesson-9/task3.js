const car1 = {
    brand: "Audi",
    model: "Q7",
    year: 2017
}

const car2 = {
    brand: "Nissan",
    model: "Qashqai",
    owner: "Meri"
}

const car3 = { ...car1, ...car2}

console.log(car3)