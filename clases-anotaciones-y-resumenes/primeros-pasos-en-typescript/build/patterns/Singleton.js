"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(); // Se crea la unica instancia compartida a nivel de aplicacion
        }
        return Singleton.instance;
    }
}
exports.Singleton = Singleton;
//# sourceMappingURL=Singleton.js.map