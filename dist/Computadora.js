"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
class Computadora {
    constructor() {
        this.cpu = "";
        this.ram = "";
        this.gpu = "";
    }
    mostrarCaracteristicas() {
        console.log("CPU:", this.cpu);
        console.log("RAM:", this.ram);
        console.log("GPU:", this.gpu);
    }
}
exports.Computadora = Computadora;
