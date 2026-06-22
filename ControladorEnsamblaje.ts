import { IEnsamblador } from "./interface";
import { Computadora } from "./Computadora";

export class ControladorEnsamblaje {

    constructor(private ensamblador: IEnsamblador) {}

    construirPC(): Computadora {
        this.ensamblador.construirCPU();
        this.ensamblador.construirRAM();
        this.ensamblador.construirGPU();

        return this.ensamblador.obtenerComputadora();
    }
}