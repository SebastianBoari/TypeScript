"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jefe = exports.Trabajador = exports.Persona = void 0;
class Persona {
    constructor(nombre, apellido, edad) {
        // Inicializa las propiedades de la clase Persona
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    ;
    // Método que imprime un saludo con el nombre, apellido y edad de la persona
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
    ;
}
exports.Persona = Persona;
;
class Trabajador extends Persona {
    constructor(nombre, apellido, edad, sueldo) {
        // Llama al constructor de la clase padre (Persona) para inicializar las propiedades heredadas
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    }
    ;
    // Sobreescribe el método saludar de la clase Persona
    saludar() {
        // Llama al método saludar de la clase padre (Persona)
        super.saludar();
        // Agrega un paso extra para imprimir el sueldo del empleado
        console.log(`Mi sueldo es de ${this.sueldo} euros`);
    }
    ;
}
exports.Trabajador = Trabajador;
;
class Jefe extends Persona {
    constructor(nombre, apellido, edad) {
        // Llama al constructor de la clase padre (Persona) para inicializar las propiedades heredadas
        super(nombre, apellido, edad);
        this.empleados = [];
    }
    ;
}
exports.Jefe = Jefe;
;
//# sourceMappingURL=Persona.js.map