import { Computadora } from "./Computadora";
import { IEnsamblador } from "./interface";

export class EnsambladorGaming implements IEnsamblador {

    private computadora: Computadora;

    constructor() {
        this.computadora = new Computadora();
    }

    construirCPU(): void {
        this.computadora.cpu = "Intel i9";
    }

    construirRAM(): void {
        this.computadora.ram = "32 GB";
    }

    construirGPU(): void {
        this.computadora.gpu = "RTX 5090";
    }

    obtenerComputadora(): Computadora {
        return this.computadora;
    }
}