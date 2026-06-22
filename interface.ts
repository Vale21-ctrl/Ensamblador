import { Computadora } from "./Computadora";

export interface IEnsamblador {
    construirCPU(): void;
    construirRAM(): void;
    construirGPU(): void;
    obtenerComputadora(): Computadora;
}