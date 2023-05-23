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


// 🙋‍♂️Fin de la clase uno, ya nos queda una demo, una plantilla, en la cual seguir trabajando las clases posteriores e ir agregando conceptos propios de TypeScript.