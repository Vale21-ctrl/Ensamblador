"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControladorEnsamblaje = void 0;
class ControladorEnsamblaje {
    constructor(ensamblador) {
        this.ensamblador = ensamblador;
    }
    construirPC() {
        this.ensamblador.construirCPU();
        this.ensamblador.construirRAM();
        this.ensamblador.construirGPU();
        return this.ensamblador.obtenerComputadora();
    }
}
exports.ControladorEnsamblaje = ControladorEnsamblaje;
