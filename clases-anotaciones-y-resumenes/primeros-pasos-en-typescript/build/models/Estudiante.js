"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    constructor(nombre, cursos, apellidos) {
        // Las variables privadas no son accesibles desde fuera. Solo desde el ambito de clase 
        this.ID = 'asd123132ascv';
        // Inicializamos las propiedades
        this.nombre = nombre;
        if (apellidos) {
            this.apellidos = apellidos;
        }
        ;
        this.cursos = cursos;
    }
    ;
    // Getters
    get horasEstudiadas() {
        let horasEstudiadas = 0;
        this.cursos.forEach((curso) => {
            horasEstudiadas += curso.horas;
        });
        return horasEstudiadas;
    }
    ;
    get ID_Estudiante() {
        return this.ID;
    }
    ;
    // Setters
    set NuevoIdEstudiante(id) {
        this.ID = id;
    }
    ;
}
exports.Estudiante = Estudiante;
;
//# sourceMappingURL=Estudiante.js.map