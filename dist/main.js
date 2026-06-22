"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EnsambladorGaming_1 = require("./EnsambladorGaming");
const EnsambladorOficina_1 = require("./EnsambladorOficina");
const ControladorEnsamblaje_1 = require("./ControladorEnsamblaje");
// PC Gaming
const ensambladorGaming = new EnsambladorGaming_1.EnsambladorGaming();
const director1 = new ControladorEnsamblaje_1.ControladorEnsamblaje(ensambladorGaming);
const pcGaming = director1.construirPC();
console.log("=== PC Gaming ===");
pcGaming.mostrarCaracteristicas();
// PC Oficina
const ensambladorOficina = new EnsambladorOficina_1.EnsambladorOficina();
const director2 = new ControladorEnsamblaje_1.ControladorEnsamblaje(ensambladorOficina);
const pcOficina = director2.construirPC();
console.log("=== PC Oficina ===");
pcOficina.mostrarCaracteristicas();
