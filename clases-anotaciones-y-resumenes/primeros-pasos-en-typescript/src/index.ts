// Clase 1: Introducción a TypeScript


// |---------------------------------------------------|


// ❓Que es TypeScript?

// Es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superset estáticamente tipado de JavaScript. 
// El tipado estático en TypeScript permite a los desarrolladores especificar los tipos de variables, parámetros de funciones y el tipo de retorno de las funciones.
// La primera versión pública conocida como TypeScript 0.8 fue lanzada en octubre de 2012.


// |---------------------------------------------------|


// 🧑‍💻Entorno de desarrollo:

// 1- Tener instalado nodejs 
// 2- Tener instalado npm, pnpm o yarn  
// 3- IDE (De tu preferencia)

// |---------------------------------------------------|


// ⚒️🔎Inicio y configuracion para trabajar con TypeScript

// 1️⃣ Inicializamos el proyecto:
// npm init -y o npm init y rellenamos los datos del proyecto

// 2️⃣ Las dependencias necesarias para empezar:
// npm install --save-dev @types/node nodemon ts-node typescript

// 3️⃣ Definir un archivo de configuracion tsconfig:
// npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowjs true --noImplicitAny true

// No es necesario darle toda esa configuracion desde el comando se puede generar el archivo solo con:
// npx tsc --init -y
// Se generara el archivo tsconfig.json el cual nos ofrece todas las opciones de configuracion con una breve explicacion de lo que hace cada linea.


// 4️⃣ Creamos estructura del proyecto:
// Carpeta src
// nodemon.json (nodemon config)

// 5️⃣ Empaquetador para realizar versiones mas livianas de la build de forma sencilla:
// npm i --save-dev rimraf

// 6️⃣ Scripts a implementar:
/*"scripts": {
    "start": "ts-node .",
    "dev": "nodemon .",
    "trans": "tsc",
    "build:prod": "rimraf ./build && tsc",
    "start:prod": "npm run build:prod && node build/index.js"
}*/


// |---------------------------------------------------|


console.log("Hola Mundo desde TypeScript");

// Esto es un comentario en TS

/*
* Esto es otro comentario en TS
* Un Comentario Multilinea
*/


// |---------------------------------------------------|


// Clase 2: 

// Declaracion de Variables:
// Las bases de las variales de JavaScript se mantienen intactas en TypeScript.

// Funciona el var
var nombre = "Martin";
// Funciona let
let email = "email@email.com";

// Funciona la concatenacion 
console.log("Hola, " + nombre);
// Funcionan las backticks
console.log(`Como estas ${nombre}?`);

// No se puede reasignar una constante
const PI = 3.1416;
//PI = PI + 1;



// 🔢📄El tipado

// En JavaScript, el tipado es inferido, mientras que en TypeScript podemos definir el tipo o no hacerlo.
// En TypeScript, no es obligatorio definir el tipo de la variable, pero es muy recomendable, como veremos a continuación.


// Al definir el tipo de la variable, no nos permite asignar un valor de un tipo distinto al declarado.
/*
* let apellido: string = "Martinez";
* apellido = 12;
*/
// Sin embargo, si no definimos el tipo de valor en la variable, el tipado se inferirá en la declaración de la variable, y se comportará de la misma manera que en el ejemplo anterior:
/*
* let direccion = "Calle False 123";
* direccion = 2;
*/


// Si quisieramos permitir que la variable pueda tomar cualquier tipo de valor deberiamos definirlo de la siguiente manera:
/*
* let telephone:any = "01199999999";
* telephone = 01199999999;
*/
// Hay que tratar de evitar de utilizar any siempre que sea posible. Si vamos a utilizar any tenemos que ser concientes de la razón por la cual vamos a utilizarlo.


// Si declaramos una variable sin valor
let dni;
// Y luego le asignamos valor vamos a ver que ya no infiere el tipado de la variable y pasa a ser "any". 
dni = false; 
// Tener en cuenta que solo se infiere correctamente el tipado de la variable en su declaración. Si al momento de declarar la variable no le asignamos un valor el tipado pasara a ser any.

// Tampoco se puede re-definir el tipado de una variable. Por ejemplo:
/*
* let mascota:string = "Max";
* mascota:number = "8";
*/


// |---------------------------------------------------|


// Si bien esto parece ser redundante es muy buena practica. Tratemos de mantener siempre definido el tipado de nuestras variables.
let error:boolean = false;

// Que pasará si intentamos consologear variables que no son del tipo string?
console.log(`Hay algun error?: ${error}`);
// Al igual que en javascript podemos ver la representacion de la variable como un string.


// |---------------------------------------------------|


// ** Instanciacion multiple de variables

// EN javascript se utiliza mucho, por ende en typescript tambien pero tiene las diferencias que nos podemos imaginar.

let a:string, b:boolean, c:number; // Instancia 3 variables sin valor inicial

a = "TypeScript";
b = true;
c = 8.9; // Aunque sea un float es un number


// |---------------------------------------------------|
 
// ** Factor Spread (Propagacion)

const unObjeto = {
    titulo: "Un titulo",
    precio: 2999,
    stock: 10
};

// En asignacion de variables
let {titulo, precio, stock} = unObjeto;

// En listas
let listaCompraLunes: string[] = ["Pan", "Manteca", "Leche"];
let listaCompraMartes: string[] = [...listaCompraLunes, "Huevos", "Carne"];
let listaCompraMiercoles: string[] = ["Pescado", "Vino"]
let listaCompraSemana: string[] = [...listaCompraLunes, ...listaCompraMiercoles];

// En objetos
let estadoApp = {
    usuario: "admin",
    session: 3,
    jwt: "bear12312837u19823"
}
console.log(estadoApp);
let nuevoEstado = {
    ...estadoApp,
    session: 4
}
console.log(nuevoEstado);

// |---------------------------------------------------|


// ** Tipos primitivos del lenguaje (BuiltIn Types):

// En las estructuras condicionales los tipos de datos se comportan igual que en javascript 
// number, string, boolean, void, null y undefined

// Tipos de datos mas complejos
let taskList: string[] = ["Tarea 1", "Tarea 2"];
let randomTypes: (string | boolean | number)[] = ["Hola", true, 256];

// Mas delante en el curso veremos como crear nuestros propios tipos de datos. 


// |---------------------------------------------------|


// ** Enumerados

// Los enumerados en TypeScript permiten definir un conjunto de valores con nombre. En este caso, se define un enumerado llamado Estados.

// Cada valor en el enumerado puede tener un valor asignado. En este ejemplo, los valores Completado, Incompleto y Pendiente tienen asignados los valores "C", "I" y "P" respectivamente.

// Se declara una variable llamada estadoTarea de tipo Estados, lo que significa que solo puede contener uno de los valores definidos en el enumerado Estados.

// Se asigna el valor Estados.Completado a la variable estadoTarea. Esto significa que estadoTarea contendrá el valor "C".

// Se imprime el valor de estadoTarea en la consola utilizando console.log(). En este caso, se imprimirá el valor "C".

enum Estados {
    "Completado" = "C",      // Valor asignado: "C"
    "Incompleto" = "I",     // Valor asignado: "I"
    "Pendiente" = "P"       // Valor asignado: "P"
};
let estadoTarea: Estados = Estados.Completado;  
console.log(estadoTarea);  // Imprime "C" en la consola


// El valor numerico que se le asigna a cada enumerado es autoincremental. Por ejemplo:

enum PuestoDeCarrera {
    "Primero" = 1,      // Valor asignado: 1
    "Segundo",          // Valor asignado: 2 (autoincremental)
    "Tercero"           // Valor asignado: 3 (autoincremental)
};

let puestoMaraton: PuestoDeCarrera = PuestoDeCarrera.Tercero;  
console.log(puestoMaraton);  // Imprime 3 en la consola

// El enumerado PuestoDeCarrera representa los diferentes puestos de una carrera. Los valores numéricos asignados a cada elemento del enumerado son autoincrementales. Se comienza asignando explícitamente el valor 1 al primer elemento "Primero", y los siguientes elementos "Segundo" y "Tercero" se les asigna automáticamente el valor siguiente al anterior.

// Ah, esto tambien se puede inferir:
let puestoRally = PuestoDeCarrera.Segundo;
// Pero no es buena practica. Tratemos de definir explicitamente todo lo que podamos:
let puestoF1: PuestoDeCarrera = PuestoDeCarrera.Primero;


// |---------------------------------------------------|


// ** Interface
// En TypeScript tambien tenemos Interfaces

// Una interface, en el contexto de la programación, es una estructura que define un conjunto de propiedades y métodos que un objeto puede implementar. Sirve como un contrato que establece qué funcionalidades debe proporcionar un objeto sin definir su implementación específica.

// En TypeScript, una interface es una herramienta que permite definir la estructura y el tipo esperado de un objeto. Las interfaces en TypeScript son opcionales y se utilizan principalmente para lograr un tipado más sólido y seguro en el código. Al definir una interface, se especifican los nombres y tipos de las propiedades y los parámetros de los métodos que se esperan en un objeto que implemente dicha interface.

// Una vez definida una interface, se puede utilizar para garantizar que un objeto cumpla con esa estructura. Esto significa que cualquier objeto que implemente una interface específica debe proporcionar todas las propiedades y métodos definidos en la interface. Si un objeto no cumple con los requisitos de la interface, el compilador de TypeScript mostrará un error.

// Explicación rápida: Es como un esquema/modelo de que propiedades y de que tipo de valor deben ser las propiedades de un objeto. Cuando instanciemos un objeto podemos aplicarle ese esquema.

// Declaramos la interfaz que debe tener la variable
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
};
// Y asi utilizamos la interfaz que acabamos de crear
let tarea1: Tarea = {
    nombre: "Comprar pan",
    estado: Estados.Pendiente,
    urgencia: 10 
};

console.log(`Tarea: ${tarea1.nombre}`); // Imprime "comprar pan" en consola


// |---------------------------------------------------|


// ** Crear Tipos de datos en TypeScript

// La diferencia esencial entre una interfaz y un tipo (type) en TypeScript es que las interfaces se utilizan para definir la estructura de un objeto y establecer un contrato, mientras que los tipos (type) permiten crear nombres personalizados para cualquier tipo de datos y realizar operaciones con ellos. 

type Producto = {
    precio: number,
    nombre: string,
    anio: number
};

let coche: Producto = {
    precio: 30000,
    nombre: "Audi",
    anio: 2010
};

console.log(`Coche: ${coche.nombre}`); // Imprime "Audi" en consola


// |---------------------------------------------------|


//  Al principio puede ser muy confuso cuando usar uno y cuando usar otro y entender la diferencia real entre un tipo y una interfaz pero mas adelante vamos a estar hablando mas sobre el tema para poder saber cuando utilizar tipos y cuando utilizar interfaces hasta que puedan interiorizar los casos de uso de cada uno y entender las diferencias principales.


// |---------------------------------------------------|


// ** Vamos a repasar para acostumbrarnos a como se ven en TypeScript cosas que manejamos de forma seguida en JavaScript

// ** Estructuras condicionales

// En TypeScript funcionan las mismas estructuras condicionales con la misma sintaxis.

// if - else
if(error){
    console.log("Hay un error");
} else {
    console.log("No hay error")
};

// if - else if - else
if(coche.anio < 2010){
    console.log(`Coche: ${coche.nombre} es viejo`);
} else if( coche.anio === 2010){
    console.log(`Coche: ${coche.nombre} es del 2010`);
} else {
    console.log(`Coche: ${coche.nombre} es nuevo`);
};

// Switch
switch (tarea1.estado) {

    case Estados.Completado:
    console.log("La tarea esta completada");      
    break;
    
    case Estados.Incompleto:
    console.log("La tarea no esta completa");
    break;
    
    case Estados.Pendiente:
    console.log("La tarea esta pendiente");
    break;

    default:
    console.log("La tarea fue comprobada");
    break;
};

// Operador ternario
console.log(coche.anio < 2010 ? `Coche: ${coche.nombre} es viejo` : `Coche: ${coche.nombre} es nuevo`)


// ** Bucles

// En TypeScript tambien contamos con bucles y con metodos de arrays como en JavaScript. 

let listaTareasNueva:  Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 0
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 5
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Incompleto,
        urgencia: 10
    }
]


// For clasico
for (let index = 0; index < listaTareasNueva.length; index++) {
    const tarea = listaTareasNueva[index];

    console.log(`${index} - ${tarea.nombre}`);
    
};

// For Each
listaTareasNueva.forEach((tarea: Tarea, index: number) => {
    console.log(`${index} - ${tarea.nombre} - ${tarea.urgencia} - ${tarea.estado}`);
});

// While
while (tarea1.estado !== Estados.Completado){
    tarea1.urgencia++;

    if(tarea1.urgencia == 20){
        tarea1.estado = Estados.Completado;
        break;
    };
};

// Tambien Do While, etc etc...


// |---------------------------------------------------|