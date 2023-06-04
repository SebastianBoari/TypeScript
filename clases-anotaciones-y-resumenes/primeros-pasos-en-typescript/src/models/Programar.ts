import { InterfaceTarea, Nivel } from "./interfaces/tarea.interface";

export class Programar implements InterfaceTarea{
    titulo: string;
    descripcion?: string | undefined;
    completada: boolean;
    urgencia?: Nivel | undefined;


    constructor(titulo: string, descripcion: string, completada: boolean, urgencia: Nivel){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.completada = completada;
        this.urgencia = urgencia;
    };

    resumen = () => {
        return `Tarea de Programacion: ${this.titulo} - ${this.completada}`;
    };
};