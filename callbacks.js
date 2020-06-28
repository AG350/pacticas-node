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
        id: 1,
        marca: "Toyota",
        modelo: "Yaris"

    }
];

let getCarById = (id,callback)=>{
    let car = carDb.find((car => car.id === id));
    if (!car) {
        const error = new Error();
        error.message = "No se encontro el auto";
        return callback(error);
    }

    callback(null, car);
};

getCarById(1,(e,car)=>{
    return e? console.log(e.message): console.log(car);
    
});
getCarById(20,(e,car)=>{
    return e? console.log(e.message): console.log(car);
});