export enum Nivel{
    "Informativa",
    "Urgente",
    "Bloqueante"
};

// Interface: Sirve para definir lafirma y los puntos necesarios a implementar por quien la utilice.
export interface InterfaceTarea {
    titulo: string,
    descripcion?: string,
    completada: boolean,
    urgencia?: Nivel,
    resumen: () => string,
};
