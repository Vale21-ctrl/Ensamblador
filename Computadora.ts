export class Computadora {
    cpu: string = "";
    ram: string = "";
    gpu: string = "";

    mostrarCaracteristicas(): void {
        console.log("CPU:", this.cpu);
        console.log("RAM:", this.ram);
        console.log("GPU:", this.gpu);
    }
}