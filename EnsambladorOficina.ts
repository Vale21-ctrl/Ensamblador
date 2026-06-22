import { Computadora } from "./Computadora";
import { IEnsamblador } from "./interface";

export class EnsambladorOficina implements IEnsamblador {

    private computadora: Computadora;

    constructor() {
        this.computadora = new Computadora();
    }

    construirCPU(): void {
        this.computadora.cpu = "Intel i5";
    }

    construirRAM(): void {
        this.computadora.ram = "16 GB";
    }

    construirGPU(): void {
        this.computadora.gpu = "Intel UHD Graphics";
    }

    obtenerComputadora(): Computadora {
        return this.computadora;
    }
}