/*
Async:
La declaración de función async define una función asíncrona, 
la cual devuelve un objeto AsyncFunction(promise).
Una función async PUEDE contener una expresión await, 
la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada y, 
a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/funcion_asincrona
*/
var bookDb = [
    {
        id : 1,
        titulo: "Lord Of The Rings",
        autorId: 1
    },
    {
        id : 2,
        titulo: "Cronica De Una Muerte Anunciada",
        autorId: 2
    },
    {
        id : 3,
        titulo: "De La Tierra A La Luna",
        autorId: 3
    }
];

var authorDb = [
    {
        id : 1,
        nombre : "J.R.R. Tolkien"
    },
    {
        id : 2,
        nombre : "Gabriel Garcia Marquez"
    },
    {
        id : 3,
        nombre : "Julio Verne"
    }
];
//FUNCION ASYNC SIN AWAIT PARA VERIFICAR QUE DEVUELVE UN PROMISE
async function getBookById(id){
    const book = bookDb.find(book => book.id === id);
    if (!book) {
        const error = new Error();
        error.message = "Libro no encontrado!";
        throw error;
    }

    return book;
};

async function getAuthorById(id){
    const author = authorDb.find(author => author.id === id);
    if (!author) {
        const error = new Error();
        error.message = "Autor no encontrado!";
        throw error;
    }

    return author;
};

//FUNCION ASYNC CON AWAIT, PARA PRACTICAR EL MANEJO DE LA PROMESA, Y VALIDACION DE ERROR
async function main(id){
    try {
        const book = await getBookById(id);
        const author = await getAuthorById(book.autorId);
        console.log(`El titulo ${book.titulo}, fue escrito por ${author.nombre}`);
        
    } catch (error) {
       console.log(error.message);
    }
    
};

//main(1);
//main(2);
main(3);
main(4);