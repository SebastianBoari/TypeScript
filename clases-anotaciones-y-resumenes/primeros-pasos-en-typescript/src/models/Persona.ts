export class Persona {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre: string, apellido: string, edad: number) {
        // Inicializa las propiedades de la clase Persona
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    };

    // Método que imprime un saludo con el nombre, apellido y edad de la persona
    saludar(): void {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    };
};


export class Trabajador extends Persona {
    sueldo: number;

    constructor(nombre: string, apellido: string, edad: number, sueldo: number) {
        // Llama al constructor de la clase padre (Persona) para inicializar las propiedades heredadas
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
    };

    // Sobreescribe el método saludar de la clase Persona
    saludar(): void {
        // Llama al método saludar de la clase padre (Persona)
        super.saludar();
        // Agrega un paso extra para imprimir el sueldo del empleado
        console.log(`Mi sueldo es de ${this.sueldo} euros`);
    };
};

export class Jefe extends Persona {
    empleados: Trabajador[] = [];

    constructor(nombre: string, apellido: string, edad: number) {
        // Llama al constructor de la clase padre (Persona) para inicializar las propiedades heredadas
        super(nombre, apellido, edad);
    };

    // Por defecto el jefe utilizara el metodo saludar del padre (persona) 
};
