import { EnsambladorGaming } from "./EnsambladorGaming";
import { EnsambladorOficina } from "./EnsambladorOficina";
import { ControladorEnsamblaje } from "./ControladorEnsamblaje";

// PC Gaming
const ensambladorGaming = new EnsambladorGaming();
const director1 = new ControladorEnsamblaje(ensambladorGaming);

const pcGaming = director1.construirPC();

console.log("=== PC Gaming ===");
pcGaming.mostrarCaracteristicas();

// PC Oficina
const ensambladorOficina = new EnsambladorOficina();
const director2 = new ControladorEnsamblaje(ensambladorOficina);

const pcOficina = director2.construirPC();

console.log("=== PC Oficina ===");
pcOficina.mostrarCaracteristicas();