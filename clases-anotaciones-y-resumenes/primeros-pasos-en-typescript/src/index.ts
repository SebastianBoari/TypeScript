// Clase 1: Introducción a TypeScript

import { type } from "os";


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
Esto es otro comentario en TS
Un Comentario Multilinea
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
let apellido: string = "Martinez";
apellido = 12;
*/
// Sin embargo, si no definimos el tipo de valor en la variable, el tipado se inferirá en la declaración de la variable, y se comportará de la misma manera que en el ejemplo anterior:
/*
let direccion = "Calle False 123";
 direccion = 2;
*/


// Si quisieramos permitir que la variable pueda tomar cualquier tipo de valor deberiamos definirlo de la siguiente manera:
/*
let telephone:any = "01199999999";
telephone = 01199999999;
*/
// Hay que tratar de evitar de utilizar any siempre que sea posible. Si vamos a utilizar any tenemos que ser concientes de la razón por la cual vamos a utilizarlo.


// Si declaramos una variable sin valor
let dni;
// Y luego le asignamos valor vamos a ver que ya no infiere el tipado de la variable y pasa a ser "any". 
dni = false; 
// Tener en cuenta que solo se infiere correctamente el tipado de la variable en su declaración. Si al momento de declarar la variable no le asignamos un valor el tipado pasara a ser any.

// Tampoco se puede re-definir el tipado de una variable. Por ejemplo:
/*
let mascota:string = "Max";
mascota:number = "8";
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

// Las interfaces se utilizan principalmente para describir la forma de un objeto y se pueden implementar y extender en clases, mientras que los tipos personalizados ofrecen más flexibilidad al permitir la combinación de varios tipos existentes. 

// Se crea utilizando la palabra clave type. Permite crear un tipo que puede ser una combinación de otros tipos existentes, como tipos primitivos, tipos de objeto, uniones, intersecciones, etc.

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


// Clase 3: Funciones

// La sintaxis es igual a la de JavaScript pero vemos que en los parametros debemos definir el tipado de lo que se va a estar recibiendo.

// Aprovechamos para aclarar algunas buenas practicas mientras mostramos una funcion 

// Es buena practica documentar nuestro codigo. Se documenta de esta forma:
/**
 * Funcion que sirve para saludar 
 * @param nombre Nombre de la persona a saludar
*/
function saludar (nombre: string) {
    console.log(`Hola ${nombre}`);
};

saludar("Sebastian");

// Pero es mucho mejor que el nombre de las funciones sean lo suficientemente descriptivo como para entender que hace solo leyendo el nombre:

function saludarPorConsola (nombre: string){
    console.log(`Hola ${nombre}`);
};

saludarPorConsola("Carlos");
// No necesariamente debemos pasar un string, podemos darle como argumento una variable que contenga un string y tambien va a funcionar
let persona: string = "Jorge";
saludarPorConsola(persona);


// |---------------------------------------------------|


// Parametros opcionales

// Con la sintaxis de nombre: string = "Pepe" estamos indicando que el parametro es opcional y que el valor por defecto que tomara nombre siempre será Pepe
/**
 * Funcion que saluda a una persona que se esta yendo.
 * @param nombre Nombre de la persona a despedir, por defecto sera "Pepe"
 */
function despedirPersona (nombre: string = "Pepe"){
    console.log(`Adios, ${nombre}!`);
};

despedirPersona(); // Devolvera en consola un "Adios, Pepe!"
despedirPersona("Alba"); // Devolvera en consola un "Adios, Alba!"

// Notamos como con la sintaxis nombre?: string le estamos indicando a la funcion que el parametro es opcional
function despedidaOpcional(nombre?: string){
    if(nombre){
        console.log(`Adios, ${nombre}!`);
    } else {
        console.log(`Adios!`);
    };
};
despedidaOpcional();
despedidaOpcional("Marcos");

// Y esto lo podemos aplicar a muchos parametros al mismo tiempo

// Aqui estamos pidiendo de forma obligatoria un nombre, el apellido es opcional y la edad es opcional pero toma valor por defecto 18.
function variosParams (nombre: string, apellido?: string, edad: number = 18){
    if(apellido){
        console.log(`${nombre} ${apellido} tiene ${edad} años.`);
    } else {
        console.log(`${nombre} tiene ${edad} años.`);
    };
};
variosParams("Martin") // Martin tiene 18 años
variosParams("Martin", "San Jose") // Martin San Jose tiene 18 años
variosParams("Martin", "San Jose", 28); // Martin San Jose tiene 38 años
variosParams("Martin", undefined, 30); // Martin tiene 30 años

function variosTipos(a: string | number){
    if(typeof(a) === 'string'){
        console.log("A es un string");
    } else if (typeof(a) === 'number') {
        console.log("A no es un string");
    };
};
variosTipos('hola'); // A es un string
variosTipos(3); // A no es un string


// |---------------------------------------------------|


// Return en TypeScript

// Podemos definir el tipo de datos que puede retornar una funcion con la misma sintaxis que venimos trabajando. Al terminar el parentesis de los parametros ponemos : y los tipos de datos que puede retornar la funcion.

// Van a ver que si intentan retornar un numero en esta funcion va a dar un error
function ejemploReturn(apellido: string, nombre?: string): string{
    return `${nombre} ${apellido}`;
};

// Tambien podemos hacer que pueda retornar un tipo de dato u otro.
function ejemploReturn2(): string | number{
    return 3;
};


// |---------------------------------------------------|


// Multiple Params (Funciones con múltiples parámetros)

const lista: string[] = ["Claudia", "Sandra", "Jessica", "Luciana", "Alberto", "Rogelio", "Jorge", "Juan", "Carlos", "Roberto"];

// Esta función recibe un array, una lista de nombres que luego itera con un forEach y los muestra en la consola uno por uno.
function ejemploParamLista(nombres: string[]) {
nombres.forEach((nombre) => {
console.log(nombre);
});
}

ejemploParamLista(lista);

// Ahora bien, también existe la opción de que le pasemos múltiples parámetros sin especificar cuántos exactamente.
// En esta función, utilizamos el operador spread (...) en la declaración de parámetros para indicar que aceptará un número variable de argumentos. (parametros indefinidos)

function ejemploMultipleParams(...nombres: string[]) {
nombres.forEach((nombre) => {
console.log(nombre);
});
}

// Si bien a simple vista son parecidas las funciones, en esta última, gracias al spread operator, podemos pasarle parámetros de esta forma:

ejemploMultipleParams("Martin");
ejemploMultipleParams("Jose", "Agustina", "Camila");

// |---------------------------------------------------|


// Void

// Pero... ¿se dieron cuenta de que en estos casos las funciones no retornan nada? Estuvimos hablando recién sobre el retorno en TypeScript y ahora estamos creando funciones que no devuelven ningún valor, sino que solo imprimen datos en la consola.

// En estos casos, las funciones tienen un tipo de retorno VOID.

function funcionVoid(nombre: string): void {
    console.log(nombre);
};

funcionVoid("Alejandro");


// |---------------------------------------------------|


// ❓¿Por qué tipar absolutamente todo?

// Si bien puede parecer tedioso al principio acostumbrarse a tipar absolutamente todo, es una ventaja de TypeScript tener un tipado completo en nuestro código.

// ¿En qué casos es beneficioso? Al documentar una función, podemos comprender rápidamente qué hace y qué tipos de datos espera:

/** Retorna el nombre completo de una persona.
@param nombre El nombre de la persona.
@param apellido El apellido de la persona.
@returns El nombre completo de la persona.
*/
function ejDocs(nombre: string, apellido: string): string {
    return `${nombre} ${apellido}`;
};

// Al utilizar la función y posicionar el cursor sobre ella, podemos ver claramente qué parámetros debe recibir y qué valor devuelve.
    
console.log(ejDocs("Gustavo", "Cerati"));


// |---------------------------------------------------|


// Arrow Functions

// Las arrow functions, también conocidas como funciones anónimas, también funcionan en TypeScript.

// Aprovecharemos para repasar los tipos personalizados y la anotación de tipos de retorno en las funciones.

type Empleado = {
    nombre: string,
    apellidos: string,
    edad: number
};

let empleadoGustavo: Empleado = {
    nombre: "Gustavo",
    apellidos: "Fring",
    edad: 51
};

const mostrarEdadEmpleado = (empleado: Empleado): string => `${empleado.nombre} tiene ${empleado.edad} años`;

console.log(mostrarEdadEmpleado(empleadoGustavo));


// |---------------------------------------------------|


// Callbacks en Arrow Functions

// En TypeScript, las arrow functions también se pueden utilizar como callbacks, lo que brinda una forma concisa y expresiva de pasar funciones como argumentos a otras funciones. Veamos un ejemplo:

// Creamos una función llamada mapArray que toma un array de números y una función de callback como argumentos.
// La función mapArray itera sobre cada elemento del array y aplica el callback a cada uno, devolviendo un nuevo array con los resultados.

function mapArray(array: number[], callback: (num: number) => number): number[] {

    const newArray: number[] = [];

    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i]);
        newArray.push(result);
    }

    return newArray;
}

// Definimos una arrow function llamada double que duplica un número.
const double = (num: number): number => {
    return num * 2;
};

// Definimos un array de números.
const numbers: number[] = [1, 2, 3, 4, 5];

// Utilizamos la función mapArray pasando el array y la función double como callback.

// Esto aplicará la función double a cada número del array y devolverá un nuevo array con los números duplicados.
const doubledNumbers = mapArray(numbers, double);

console.log(doubledNumbers); // Resultado: [2, 4, 6, 8, 10]

// Hemos utilizado una arrow function (double) como callback en la función mapArray. La arrow function toma un número como argumento y lo duplica.

// Luego, pasamos la función double como argumento a mapArray, que se encarga de aplicarla a cada número del array y devolver un nuevo array con los números duplicados.


// |---------------------------------------------------|


// Asincronismo en TypeScript

// Para trabajar en TypeScript con asincronismo tenemos las funciones async y las funciones generadoras

// Async Functions
async function ejemploAsync(): Promise<string>{
    await "Tarea a completar antes de seguir con la secuencia de instrucciones";
    
    console.log("Tarea completada");

    return "Completado";
};

ejemploAsync().then((res) => {
    console.log(`Respuesta: ${res}`);
}).catch((err) => {
    console.log(`Ha ocurrido un error: ${err}`);
}).finally(()=> console.log("Cola de ejecucion finalizada"));



// Generators (funciones generadoras)

// Las funciones generadoras en TypeScript son una característica poderosa que permite la creación de iteradores personalizados. Estas funciones son capaces de generar secuencias de valores utilizando la sintaxis function* en lugar de function.

// La principal ventaja de las funciones generadoras es que nos permiten pausar y reanudar la ejecución de la función en cualquier momento. Esto significa que podemos generar valores bajo demanda, lo que a su vez nos permite ahorrar recursos y mejorar la eficiencia.

// Las funciones generadoras también se utilizan para simplificar el código asíncrono. En lugar de utilizar callbacks o promesas, podemos utilizar funciones generadoras junto con el operador yield para hacer que nuestro código asíncrono sea más legible y fácil de seguir. Esto se logra utilizando una biblioteca como co o utilizando las capacidades nativas de JavaScript a través de las palabras clave async y await.

function* ejemploGenerator(){
    // yield ---> para emitir valores
    let index = 0;
    
    while(index < 5){
        // Emitimos un valor incrementado
        yield index++
    };
};

// Guardamos la funcion generadora en una variable
let generadora = ejemploGenerator();

// Accedemos a los valores emitidos
console.log(generadora.next().value); // 0
console.log(generadora.next().value); // 1
console.log(generadora.next().value); // 2
console.log(generadora.next().value); // 3
console.log(generadora.next().value); // 4
console.log(generadora.next().value); // Imprime undefined en consola porque el index deja de ser menor a 5.


// Watcher y Worker

// Un watcher es una herramienta que supervisa cambios en archivos de proyectos TypeScript y recompila automáticamente cuando se detecta un cambio, evitando ejecuciones manuales del compilador. 

// Los workers permiten ejecutar código en hilos o procesos separados para aprovechar sistemas multi-hilo o multi-proceso, útiles para tareas intensivas en computación sin bloquear la interfaz de usuario.

// Worker 

// Esta funcion va a ser la encargada de llamar a la funcion worker
function* watcher(valor: number){
    yield valor; // Emitimos el valor inicial
    yield* worker(valor); // Llamamos a las emisiones del worker para que emita otros valores
    yield valor + 4; // Emitimos el valor final + 10
};

function* worker(valor: number){
    yield valor + 1;
    yield valor + 2;
    yield valor + 3;
};

let generatorSaga = watcher(0);

console.log(generatorSaga.next().value); // 0 (watcher)
console.log(generatorSaga.next().value); // 1 (worker)
console.log(generatorSaga.next().value);// 2 (worker)
console.log(generatorSaga.next().value);// 3 (worker)
console.log(generatorSaga.next().value); // 4 (watcher)

// Una funcion generadora no tiene por que terminar.


// |---------------------------------------------------|


// Sobrecarga de funciones

function mostrarError(error: string | number): void{
    console.log("Ha habido un error: ", error);
};


// |---------------------------------------------------|


// Clase 4: Eventos y persistencia de datos en el navegador

// Persistencia de datos

// 1. LocalStorage: Es un mecanismo de almacenamiento que permite guardar datos en el navegador de forma persistente. Los datos almacenados en LocalStorage no se eliminan automáticamente y estarán disponibles incluso después de cerrar y volver a abrir el navegador.

// 2. SessionStorage: Similar a LocalStorage, SessionStorage también permite almacenar datos en el navegador, pero con una diferencia clave: los datos se eliminan al cerrar la ventana o pestaña del navegador. Los datos de SessionStorage solo están disponibles durante la sesión de navegación actual.

// 3. Cookies: Las cookies son pequeños archivos de texto que se almacenan en el navegador. Pueden contener datos como identificadores de sesión, preferencias del usuario, etc. Las cookies tienen una fecha de caducidad y pueden ser configuradas para tener un alcance específico de URL. Esto significa que pueden estar disponibles solo para un dominio o subdominio específico.


// Como trabajamos en el LocalStorage en TypeScript?

/* 
function guardarLocal(): void{
    localStorage.set("nombre", "Martin");
};
function guardarSession(): void{
    sessionStorage.set("nombre", "Martin");
};


function leerLocal(): void{
    let nombre: string = localStorage.get("nombre");
};
function leerSession(): void{
    let nombre: string = sessionStorage.get("nombre");
};
*/

// Cookies (con cookies-utils)

// Este es un ejemplo con una libreria que encontramos en npmjs pero puede ser cualquier libreria que elijas.

// Tambien se puede hacer de forma nativa pero es algo mas engorroso.

/* 
import { deleteAllCookies, deleteCookie, getCookieValue, setCookie } from 'cookies-utils';

const cookieOptions = {
    name: "usuario", // string,
    value: "Martin", // string,
    maxAge: 10 * 60, // optional number (value in seconds),
    expires: new Date(2099, 10, 1), // optional Date,
    path: "/"
};

// Seteamos la cookie
setCookie(cookieOptions);

// Leer una cookie
getCookieValue("usuario");

// Eliminar la cookie
deleteCookie("usuario");

// Eliminar todas las cookies
deleteAllCookies();
*/


// |---------------------------------------------------|


// Clases en TypeScript

class Temporizador {
    public terminar?: () => void;

    public empezar(): void {
        // Comprobamos que exista la funcion terminar como callback
        setTimeout(() => {
            if(!this.terminar) return;
            // Cuando haya pasado el tiempo, se ejecutara la funcion terminar
            this.terminar();
        }, 10000);
    };
};

const miTemporizador: Temporizador = new Temporizador();

// Definimos la funcion del callback a ejecutar cuando termine el tiempo
miTemporizador.terminar = () => {
    console.log("Evento terminado");
};

// Se inicia el timeout y cuando termine se ejecutara la funcion terminar();
miTemporizador.empezar(); 

// Eliminar la ejecucion de la funcion:
delete miTemporizador.terminar;


// |---------------------------------------------------|


// Clase 5:  Clases y objetos

// Como definimos una clase?

/* (Reemplazado por los imports)
class Curso {
    nombre: string;
    horas: number;

    constructor(nombre: string, horas: number){
        this.nombre = nombre;
        this.horas = horas
    };
};

class Estudiante {
    // Propiedades de clase (variables publicas o privadas)
    nombre: string;
    apellidos?: string;
    cursos: Curso[];

    constructor(nombre: string, cursos: Curso[], apellidos?: string){
        // Inicializamos las propiedades
        this.nombre = nombre;
        if(apellidos){
            this.apellidos = apellidos;
        };
        this.cursos = cursos;
    };
};
*/

import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";
import { LISTA_CURSOS } from "./mock/cursos.mock";

// Cramos un curso (Reemplazado por el mock)
// const cursoTypeScript: Curso = new Curso("TypeScript", 15);
// const cursoJavaScript: Curso = new Curso("JavaScript", 20);

const listaCursos: Curso[] = LISTA_CURSOS;

// Creamos un estudiante
const martin: Estudiante = new Estudiante("Martin", listaCursos, "San Jose");

console.log(`${martin.nombre} estudia: `);
martin.cursos.forEach((curso: Curso) => {
    console.log(`${curso.nombre} de ${curso.horas} horas`)
})

// Ejecutando un getter de la clase Estudiante

console.log(martin.horasEstudiadas);
// |---------------------------------------------------|


// Saber la instancia de un objeto/variable

// En TypeScript, puedes utilizar el operador instanceof para verificar la instancia de un objeto o variable. Aquí tienes un ejemplo de cómo usar instanceof en tu código:

// Verificar si martin es una instancia de la clase Estudiante
if (martin instanceof Estudiante){
    console.log("martin es un objeto de la clase Estudiante");
}else{
    console.log("martin no es un objeto de la clase Estudiante");
};
  
// Verificar si cursoTypeScript es una instancia de la clase Curso
/*
if(cursoTypeScript instanceof Curso){
    console.log("cursoTypeScript es un objeto de la clase Curso");
}else{
    console.log("cursoTypeScript no es un objeto de la clase Curso");
};
*/
// Se utiliza instanceof para verificar si martin es una instancia de la clase Estudiante y si cursoTypeScript es una instancia de la clase Curso. Dependiendo del resultado, se mostrará un mensaje en la consola.


// |---------------------------------------------------|

