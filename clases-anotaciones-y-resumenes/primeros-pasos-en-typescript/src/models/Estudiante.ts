import { Curso } from "./Curso";

export class Estudiante {
    // Propiedades de clase (variables publicas o privadas)
    nombre: string;
    apellidos?: string;
    cursos: Curso[];

    // Las variables privadas no son accesibles desde fuera. Solo desde el ambito de clase 
    private ID: string = 'asd123132ascv';

    constructor(nombre: string, cursos: Curso[], apellidos?: string){
        // Inicializamos las propiedades
        this.nombre = nombre;
        if(apellidos){
            this.apellidos = apellidos;
        };
        this.cursos = cursos;
    };

    // Getters
    get horasEstudiadas(): number{
        let horasEstudiadas = 0;

        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });

        return horasEstudiadas;
    };

    get ID_Estudiante (): string {
        return this.ID;
    };

    // Setters
    set NuevoIdEstudiante (id: string){
        this.ID = id;
    };
};