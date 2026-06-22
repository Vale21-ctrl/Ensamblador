# POO_ENSAMBLADORA

Proyecto en TypeScript que implementa el patrón de diseño **Builder**, simulando la construcción de computadoras Gaming y de Oficina mediante ensambladores y un controlador.

---

## Descripción

Este proyecto es una práctica de Programación Orientada a Objetos (POO) donde se modela la construcción de computadoras usando el patrón **Builder**.

Se crean distintos tipos de computadoras según el ensamblador:

- 🎮 Gaming → alto rendimiento
- 💼 Oficina → uso básico
- 🎛️ ControladorEnsamblaje → dirige el proceso
- 🖥️ Computadora → producto final

---

## Patrón de diseño

### Builder Pattern

Permite construir objetos complejos paso a paso separando la construcción de la representación.

---

## Estructura del proyecto

POO_ENSAMBLADORA/
│
├── Computadora.ts
├── interface.ts
├── EnsambladorGaming.ts
├── EnsambladorOficina.ts
├── ControladorEnsamblaje.ts
├── main.ts
├── tsconfig.json
├── dist/ (generado automáticamente)

---

## Requisitos

- Node.js (v16+)
- TypeScript

Instalar TypeScript globalmente:

```bash
npm install -g typescript