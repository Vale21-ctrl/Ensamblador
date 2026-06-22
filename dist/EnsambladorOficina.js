"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsambladorOficina = void 0;
const Computadora_1 = require("./Computadora");
class EnsambladorOficina {
    constructor() {
        this.computadora = new Computadora_1.Computadora();
    }
    construirCPU() {
        this.computadora.cpu = "Intel i5";
    }
    construirRAM() {
        this.computadora.ram = "16 GB";
    }
    construirGPU() {
        this.computadora.gpu = "Intel UHD Graphics";
    }
    obtenerComputadora() {
        return this.computadora;
    }
}
exports.EnsambladorOficina = EnsambladorOficina;
