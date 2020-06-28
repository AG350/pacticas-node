/*Permite asociar manejadores que actuarán asincrónicamente sobre un eventual 
valor en caso de éxito, o la razón de falla en caso de una falla. 
Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: 
en vez de inmediatamente retornar el valor final, el método asíncrono 
devuelve una promesa de suministrar el valor en algún momento en el futuro.
Ref. y mas datos: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise*/

const ownerDb = [
    {
        id: 1,
        nombre: "Joan Williams",
        carId: 1

    },
    {
        id: 2,
        nombre: "Sam Smith",
        carId: 2

    },
    {
        id: 3,
        nombre: "Lex Luthor",
        carId: 3

    }
];
const carDb = [
    {
        id: 1,
        marca: "VW",
        modelo: "Golf"

    },
    {
        id: 2,
        marca: "Ford",
        modelo: "F-100"

    },
    {
        id: 3,
        marca: "Toyota",
        modelo: "Yaris"

    }
];

let getOwnerById = (id)=>{
    return new Promise((resolve, reject) => {
        let owner = ownerDb.find((owner => owner.id === id));
        if (!owner) {
            const error = new Error();
            error.message = "No se encontro el auto";
            reject(error);
        }
        resolve(owner);
    });   
};

let getCarById = (id)=>{
    return new Promise((resolve, reject) => {
        let car = carDb.find((car => car.id === id));
        if (!car) {
            const error = new Error();
            error.message = "No se encontro el auto";
            reject(error);
        }
        resolve(car);
    });   
};


getOwnerById(3)
    .then(owner => {
        console.log(owner);
        return getCarById(owner.carId) 
    })
    .then(car => {
        console.log(car);
    })
    .catch(error => {
        console.log(error.message);
    });