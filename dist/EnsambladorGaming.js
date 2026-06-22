"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsambladorGaming = void 0;
const Computadora_1 = require("./Computadora");
class EnsambladorGaming {
    constructor() {
        this.computadora = new Computadora_1.Computadora();
    }
    construirCPU() {
        this.computadora.cpu = "Intel i9";
    }
    construirRAM() {
        this.computadora.ram = "32 GB";
    }
    construirGPU() {
        this.computadora.gpu = "RTX 5090";
    }
    obtenerComputadora() {
        return this.computadora;
    }
}
exports.EnsambladorGaming = EnsambladorGaming;
